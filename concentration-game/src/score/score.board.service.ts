import { Player } from '../models/player';

export class ScoardBoardService {
  constructor() {}

  public updateScore(player: Player, isGameOver: boolean) {
    player.score = !isGameOver ? (Number(player.score) + 1).toString() : 'Win';
  }

  public init(players: Player[]) {
    players.forEach((player) => {
      player.score = '0';
      player.isActive = false;
    });
    players[0].isActive = true;
  }
}
