import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
  state,
} from '@angular/animations';
import { Card } from '../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  animations: [
    trigger(`flipState`, [
      state(
        `front `,
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'back',
        style({
          transform: 'rotateY(0deg)',
        })
      ),
      transition('front => back', [
        animate(
          '1s 0s ease-out',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 0,
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
              offset: 0.4,
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
              offset: 0.5,
            }),
            style({
              transform:
                'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(0deg)',
              offset: 0.8,
            }),
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 1,
            }),
          ])
        ),
      ]),
      transition('back => front', [
        animate(
          '1s 0s ease-in',
          keyframes([
            style({
              transform: 'perspective(400px) rotateY(0deg)',
              offset: 0,
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(80deg)',
              offset: 0.4,
            }),
            style({
              transform:
                'perspective(400px) scale3d(1.5, 1.5, 1.5) rotateY(100deg)',
              offset: 0.5,
            }),
            style({
              transform:
                'perspective(400px) scale3d(0.95, 0.95, 0.95) rotateY(180deg)',
              offset: 0.8,
            }),
            style({
              transform: 'perspective(400px) rotateY(180deg)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class CardComponent {
  @Input() card!: Card;
  @Output() flipped = new EventEmitter();
  flipState: String = 'front';
  constructor() {}

  flip(): void {
    this.card.isFlipping = true;
    this.changeState(350);
    this.flipped.emit(this.card);
  }

  changeState(delay: number, callback?: Function): void {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
    setTimeout(() => {
      this.card.isFaceUp = !this.card.isFaceUp;
      this.card.isFlipping = false;
      callback && callback();
    }, delay);
  }
}
