import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('pages/index', async () => {
  await setup();
  
  it('Renders application title', async () => {
    expect(await $fetch('/')).toMatch('Ai Quiz')
  })

  it('Render an input to set the quiz theme', async () => {
    const html = await $fetch('/');
    expect(html).toMatch('Selecione o tema do quiz');
    expect(html).toMatch('<input name="quiz-theme" type="text" value="">');
  });

  it('Render a button to start the quiz', async () => {
    const html = await $fetch('/');
    expect(html).toMatch('<button type="submit">Iniciar</button>');
  });
})
