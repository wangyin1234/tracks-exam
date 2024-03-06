import type { Card, CardState } from '../models/card';

export class CardsService {
  constructor() {}

  public updateCardState(
    cardList: Card[],
    cardState: CardState,
    filterIds?: number[]
  ) {
    cardList.forEach((card, key) => {
      if (!filterIds?.includes(card.id)) {
        cardList[key] = {
          ...card,
          ...cardState,
        };
      }
    });
  }
}
