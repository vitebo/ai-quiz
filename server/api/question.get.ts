import { Configuration, OpenAIApi } from "openai";
import format from '~/utils/format';
import Prompt from '~/domain/prompt';
import Question from "~/domain/question";

const { openaiApiKey } = useRuntimeConfig();

const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  if (!configuration.apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'OpenAI API key not found',
    });
  }

  const { theme } = getQuery(event);
  const prompt = new Prompt(theme as string);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt.getQuestion(),
      temperature: 0.6,
      max_tokens: 120,
    });

    console.log({ completion: completion.data.choices[0].text })
    const json = completion.data.choices[0].text?.replaceAll('\n', '');
    const response = JSON.parse(json as string);
    const question = new Question(response.title, response.options, response.answer);
    
    return {
      title: question.title,
      options: question.options,
      answer: question.answer,
    };
  } catch (error: any) {
    if (error?.response) {
      console.error(error.response.status, error.response.data);
      throw createError({
        statusCode: 500,
        statusMessage: error.response.data,
      })
    }

    console.error(`Error with OpenAI API request: ${error.message}`);
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred during your request.',
    })
  }
})
