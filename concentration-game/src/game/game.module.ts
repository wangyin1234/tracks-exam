import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component';
import { GameService } from './game.service';
import { CardsModule } from 'src/cards/cards.module';
import { ScoreBoardModule } from 'src/score/score.board.module';

@NgModule({
  declarations: [GameComponent],
  imports: [BrowserModule, CardsModule, ScoreBoardModule],
  providers: [GameService],
  bootstrap: [GameComponent],
})
export class GameModule {}
