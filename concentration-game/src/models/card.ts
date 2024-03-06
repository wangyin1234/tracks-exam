export class Card {
  id: number;
  value: string;
  isFaceUp: boolean;
  isFlipping: boolean;

  constructor(id: number, value: string) {
    this.id = id;
    this.value = value;
    this.isFaceUp = false;
    this.isFlipping = false;
  }
}

export type CardState = {
  isFaceUp?: boolean;
  isFlipping?: boolean;
};
