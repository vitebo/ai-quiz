import Question from "./question"

export default class Quiz {
  private static minQuestionsCount = 1;
  private static maxQuestionsCount = 20;

  constructor(
    public title: string,
    public questions: Question[],
  ) {
    if (questions.length < Quiz.minQuestionsCount) throw new Error(`Quiz must have at least ${Quiz.minQuestionsCount} question`);
    if (questions.length > Quiz.maxQuestionsCount) throw new Error(`Quiz must have at most ${Quiz.maxQuestionsCount} questions`);

    this.title = title
    this.questions = questions
  }
}