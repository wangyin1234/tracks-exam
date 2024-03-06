import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [PlayerComponent],
  imports: [BrowserModule],
  exports: [PlayerComponent],
  bootstrap: [],
})
export class PlayerModule {}
