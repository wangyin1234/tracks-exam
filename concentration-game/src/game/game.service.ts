import { Injectable } from '@angular/core';
import { Card } from 'src/models/card';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  public async dealCards(cardList: Card[]) {
    for (let i = cardList.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      [cardList[i], cardList[r]] = [cardList[r], cardList[i]];
    }
  }
}
