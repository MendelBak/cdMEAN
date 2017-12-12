import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BravoComponent } from './bravo/bravo.component';
import { CharlieComponent } from './charlie/charlie.component';
import { MathServiceService } from './math-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BravoComponent,
    CharlieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MathServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
