<script setup lang="ts">
const quizTheme = ref<string>("");
</script>

<template>
  <div class="min-h-screen">
    <h1>Ai Quiz</h1>

    <form>
      <label>Selecione o tema do quiz</label>
      <InputText name="quiz-theme" v-model="quizTheme" />
      <button type="submit">Iniciar</button>
      <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">Button</button>
    </form>
  </div>
</template>
