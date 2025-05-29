export interface Question {
  question: string;
  options: string[];
}

export enum Step {
  HERO,
  QUIZ,
  RESULT,
  OFFER,
  AFTER_CLICK
}
