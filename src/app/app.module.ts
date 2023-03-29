import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';
import { WINDOW_PROVIDERS } from "./services/window.service";


@NgModule({
  declarations: [
    AppComponent,
    ScrollUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
