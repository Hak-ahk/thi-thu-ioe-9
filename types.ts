export interface BaseQuestion {
  question: string;
  hint_vi: string;
  hint_en: string;
  rationale_vi: string;
  rationale_en: string;
  correctAnswer: string;
}

export interface RearrangeQuestionType extends BaseQuestion {
  type: 'rearrange';
  words: string[];
}

export interface MultipleChoiceOption {
  text: string;
  isCorrect: boolean;
}

export interface MultipleChoiceQuestionType extends BaseQuestion {
  type: 'mc';
  options: MultipleChoiceOption[];
}

export interface FillInTheBlankQuestionType extends BaseQuestion {
  type: 'fill-in-the-blank';
}

export type Question = RearrangeQuestionType | MultipleChoiceQuestionType | FillInTheBlankQuestionType;

export interface WordBlockItem {
  id: number;
  text: string;
}