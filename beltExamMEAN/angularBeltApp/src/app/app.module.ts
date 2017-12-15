// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Http } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Import Components and Service
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { MainComponent } from './main/main.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
