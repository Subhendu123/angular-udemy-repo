import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoyComponent } from './boy/boy.component';
import { GirlComponent } from './girl/girl.component';

@NgModule({
  declarations: [
    AppComponent,
    BoyComponent,
    GirlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
