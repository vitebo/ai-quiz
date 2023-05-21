export default class Question {
  private static optionsCount = 4;

  constructor(
    public title: string,
    public options: string[],
    public answer: string,
  ) {
    if (options.length !== Question.optionsCount) throw new Error(`Question must have ${Question.optionsCount} options`);
    if (!options.includes(answer)) throw new Error('Answer must be one of the options');

    this.title = title
    this.options = options
    this.answer = answer
  }
}