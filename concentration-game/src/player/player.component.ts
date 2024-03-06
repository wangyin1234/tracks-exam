import { Component, Input } from '@angular/core';
import { Player } from '../models/player';
@Component({
  selector: 'player',
  templateUrl: './player.html',
  styleUrls: ['./player.css'],
})
export class PlayerComponent {
  @Input() player!: Player;
  constructor() {}
}
