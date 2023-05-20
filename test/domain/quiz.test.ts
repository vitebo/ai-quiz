import { describe, test, expect } from "vitest";
import Quiz from '~/domain/quiz';
import Question from "~/domain/question";

describe("domain/quiz", () => {
  test('creates a quiz', () => {
    const quiz = new Quiz('title', [new Question(1, 'title', ['a', 'b', 'c', 'd', 'e'], 'a')]);
    expect(quiz.title).toBe('title');
    expect(quiz.questions).toEqual([new Question(1, 'title', ['a', 'b', 'c', 'd', 'e'], 'a')]);
    expect(quiz).toBeInstanceOf(Quiz);
  });

  test('throws an error if questions length is less than 1', () => {
    expect(() => new Quiz('title', []))
      .toThrow('Quiz must have at least 1 question');
  });

  test('throws an error if questions length is greater than 20', () => {
    const questions: Question[] = [];
    for (let i = 0; i < 21; i++) {
      questions.push(new Question(i, 'title', ['a', 'b', 'c', 'd', 'e'], 'a'));
    }
    expect(() => new Quiz('title', questions))
      .toThrow('Quiz must have at most 20 questions');
  });
});