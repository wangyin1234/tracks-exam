import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardBoardComponent } from './card.board.component';
import { CardsService } from './cards.service';
import { CardComponent } from './card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CardBoardComponent, CardComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [CardBoardComponent],
  providers: [CardsService],
  bootstrap: [],
})
export class CardsModule {}
