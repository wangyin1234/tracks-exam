import {
  Component,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CardsService } from './cards.service';
import { Card, CardState } from '../models/card';
import { CardComponent } from './card.component';
import { CARDS } from '../constant';

@Component({
  selector: 'card-board',
  templateUrl: './card.board.html',
  styleUrls: ['./card.board.css'],
})
export class CardBoardComponent {
  cards: Card[] = new Array(16).fill(new Card(0, ''));
  @ViewChildren(CardComponent) cardChildren!: QueryList<CardComponent>;
  @Output() changeGameState = new EventEmitter();
  timeId!: NodeJS.Timeout;

  constructor(public CardsService: CardsService) {}

  public init(cardState: CardState) {
    this.cards = CARDS;
    clearTimeout(this.timeId);
    this.updateCardState(cardState);
  }

  public updateCardState(cardState: CardState, filterIds?: number[]) {
    this.CardsService.updateCardState(this.cards, cardState, filterIds);
  }

  public flipped(card: Card): void {
    const clickedCardIndex = this.cards.findIndex(
      (item) => item.isFaceUp && item.id != card.id
    );
    this.updateCardState({ isFlipping: true }, [
      card.id,
      this.cards[clickedCardIndex]?.id,
    ]);
    const delay = clickedCardIndex >= 0 ? 2500 : 800;
    this.timeId = setTimeout(() => {
      clickedCardIndex >= 0
        ? this.matchCards(this.cards[clickedCardIndex], card)
        : this.updateCardState({ isFlipping: false }, [
            card.id,
            this.cards[clickedCardIndex]?.id,
          ]);
    }, delay);
  }

  public matchCards(card1: Card, card2: Card) {
    const isSameCard = card1.value === card2.value;
    [card1, card2].forEach((card) => {
      const cardChild = this.cardChildren.find(
        (item) => item.card.id === card.id
      );
      if (cardChild) {
        cardChild.changeState(650, () => {
          card.value = isSameCard ? '' : card.value;
          if (card.id === card2.id) {
            this.updateCardState({ isFlipping: false }, [card1.id, card2.id]);
            this.changeGameState.emit(isSameCard);
          }
        });
      }
    });
  }
}
