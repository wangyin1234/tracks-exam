import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScoreBoardComponent } from './score.board.component';
import { ScoardBoardService } from './score.board.service';
import { PlayerModule } from '../player/player.module';

@NgModule({
  declarations: [ScoreBoardComponent],
  imports: [BrowserModule, PlayerModule],
  exports: [ScoreBoardComponent],
  providers: [ScoardBoardService],
  bootstrap: [],
})
export class ScoreBoardModule {}
