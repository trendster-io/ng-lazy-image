import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyImageModule } from 'ng-lazy-image';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LazyImageModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
