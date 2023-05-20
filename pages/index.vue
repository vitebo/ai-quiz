<script setup lang="ts">
const quizTheme = ref<string>("");
</script>

<template>
  <div>
    <h1>Ai Quiz</h1>

    <form>
      <label>Selecione o tema do quiz</label>
      <input name="quiz-theme" type="text" v-model="quizTheme" />
      <button type="submit">Iniciar</button>
    </form>
  </div>
</template>
