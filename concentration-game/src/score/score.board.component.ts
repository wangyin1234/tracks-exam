import { Component } from '@angular/core';
import { ScoardBoardService } from './score.board.service';
import { Player } from '../models/player';

@Component({
  selector: 'score-board',
  templateUrl: './score.board.html',
  styleUrls: ['./score.board.css'],
})
export class ScoreBoardComponent {
  players: Player[] = [];
  currentActivePlayerId?: number;
  constructor(public ScoardBoardService: ScoardBoardService) {
    for (let i = 1; i <= 2; i++) {
      this.players.push(new Player(i, 'Player ' + i));
    }
  }

  public init() {
    this.currentActivePlayerId = this.players[0].id;
    this.ScoardBoardService.init(this.players);
  }

  public updateScore() {
    const playerIndex = this.players.findIndex(
      (player) => player.id === this.currentActivePlayerId
    );
    this.ScoardBoardService.updateScore(this.players[playerIndex], false);
  }

  public changePlayer() {
    if (this.currentActivePlayerId) {
      this.currentActivePlayerId =
        this.currentActivePlayerId === this.players.length
          ? 1
          : this.currentActivePlayerId + 1;
      this.players.forEach(
        (player) => (player.isActive = player.id === this.currentActivePlayerId)
      );
    }
  }

  public gameOver() {
    const winPlayer = this.players.sort(
      (a, b) => Number(b.score) - Number(a.score)
    )[0];
    this.ScoardBoardService.updateScore(winPlayer, true);
  }
}
