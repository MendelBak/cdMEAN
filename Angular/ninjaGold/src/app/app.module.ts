import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LogComponent } from './log/log.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
