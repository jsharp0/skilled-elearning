import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillCardComponent } from './skill-card/skill-card.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SkillCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
