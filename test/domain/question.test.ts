import { describe, test, expect } from "vitest";
import Question from '~/domain/question';

describe("domain/question", () => {
  test('creates a question', () => {
    const question = new Question(1, 'title', ['a', 'b', 'c', 'd', 'e'], 'a');
    expect(question.id).toBe(1);
    expect(question.title).toBe('title');
    expect(question.options).toEqual(['a', 'b', 'c', 'd', 'e']);
    expect(question.answer).toBe('a');
    expect(question).toBeInstanceOf(Question);
  });

  test('throws an error if options length is not 5', () => {
    expect(() => new Question(1, 'title', ['a', 'b', 'c', 'd'], 'a'))
      .toThrow('Question must have 5 options');
  });

  test('throws an error if answer is not one of the options', () => {
    expect(() => new Question(1, 'title', ['a', 'b', 'c', 'd', 'e'], 'f'))
      .toThrow('Answer must be one of the options');
  });
});