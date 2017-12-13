import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BravoComponent } from './bravo/bravo.component';
import { TaskService } from './task.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BravoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
