import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('pages/index', async () => {
  await setup();
  
  it('Renders Hello Nuxt', async () => {
    expect(await $fetch('/')).toMatch('Ai Quiz')
  })
})
