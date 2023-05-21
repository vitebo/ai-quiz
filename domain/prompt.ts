export default class Prompt {
  private static questionCount = 4;
  private static questionLanguage = 'Portuguese';

  constructor(private theme: string) {}

  public getQuestion() {
    return `return a short question containing ${Prompt.questionCount} alternatives and the answer about ${this.capitalizedTheme} in ${Prompt.questionLanguage}.

return the question following the json model:
{
  "title": "question title",
  "options": ["option 1", "option 2", "option 3", "option 4"],
  "answer": "option 1"
}`;
  }

  private get capitalizedTheme() {
    return this.theme[0].toUpperCase() + this.theme.slice(1).toLowerCase();
  }
}