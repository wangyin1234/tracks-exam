import { Component, ViewChild } from '@angular/core';
import { GameService } from './game.service';
import { CardBoardComponent } from 'src/cards/card.board.component';
import { ScoreBoardComponent } from 'src/score/score.board.component';

@Component({
  selector: 'game-root',
  templateUrl: './game.html',
  styleUrls: ['./game.css'],
})
export class GameComponent {
  isStartGame: boolean = true;
  @ViewChild(CardBoardComponent) cardBoard!: CardBoardComponent;
  @ViewChild(ScoreBoardComponent) scoreBoard!: ScoreBoardComponent;
  constructor(public GameService: GameService) {}

  startNewGame(): void {
    this.isStartGame = false;
    this.cardBoard.init({ isFaceUp: false, isFlipping: false });
    this.GameService.dealCards(this.cardBoard.cards)
      .then(() => {
        this.isStartGame = true;
        this.scoreBoard.init();
        console.log('Game started Successfully');
      })
      .catch(() => {
        this.isStartGame = true;
        console.log('Game started Failed');
      });
  }

  public changeGameState(isMatch: boolean) {
    if (isMatch) {
      this.scoreBoard.updateScore();
      const isGameOver = this.cardBoard.cards.every((card) => !card.value);
      if (isGameOver) this.gameOver();
    } else {
      this.scoreBoard.changePlayer();
    }
  }

  private gameOver() {
    this.scoreBoard.gameOver();
  }
}
