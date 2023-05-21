<script setup lang="ts">
import Question from '~/domain/question';

const quizTheme = ref<string>("");
const question = ref<Question>();

interface QuestionResponse {
  title: string,
  options: string[],
  answer: string,
}

const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const { data } = await useFetch<QuestionResponse>('/api/question', {
    method: 'GET',
    query: {
      theme: quizTheme.value
    }
  });
  if (!data) return;

  console.log({ data });
  const { title, options, answer } = data.value as any;
  console.log({ title, options, answer });
  
  question.value = new Question(title, options, answer);
}
</script>

<template>
  <div class="container mx-auto flex justify-center align-middle flex-col px-6">
    <form @submit="handleSubmit">
      <label class="text-2xl font-mono font-semibold block">Selecione o tema do quiz</label>
      <InputText class="mt-4 block" name="quiz-theme" v-model="quizTheme" />
      <button class="btn btn-block mt-4" type="submit">Iniciar</button>
    </form>

    <form v-if="question" class="mt-10">
      <h2 class="text-xl">{{ question?.title }}</h2>
      <ul class="mt-6 form-control">
        <li v-for="option in question?.options" :key="option" class="hover:backdrop-brightness-95">
          <label class="label cursor-pointer text-lg font-semibold">
            <input type="radio" name="radio-10" class="radio" />
            <span class="label-text">{{ option }}l</span> 
          </label>
        </li>
      </ul>
    </form>
  </div>
</template>
