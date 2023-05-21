import { describe, test, expect } from "vitest";
import Prompt from '~/domain/prompt';

describe("domain/prompt", () => {
  test('creates a prompt', () => {
    const prompt = new Prompt('theme');
    expect(prompt).toBeInstanceOf(Prompt);
  });

  describe('#getQuestion', () => {
    test('returns a question prompt', () => {
      const prompt = new Prompt('Theme');
      expect(prompt.getQuestion()).toBe('return a short question containing 4 alternatives and the answer about Theme in Portuguese.');
    });
  
    test('returns a question prompt with the theme capitalized', () => {
      const prompt = new Prompt('THEME');
      expect(prompt.getQuestion()).toBe('return a short question containing 4 alternatives and the answer about Theme in Portuguese.');
    });
  });
});