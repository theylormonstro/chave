export interface Question {
  id: number;
  text: string;
  options: string[];
}

export enum Step {
  HERO,
  QUIZ,
  RESULT,
  OFFER,
  AFTER_CLICK
}
