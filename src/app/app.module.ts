import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomFormsModule } from 'ng2-validation'

// Import your library
import { SampleModule } from 'auth-library';

import {AuthService} from 'auth-library/auth.service'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SampleModule,
    CustomFormsModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( private authService: AuthService) {
    this.authService.setApiUrl('http://localhost:8000');
  }
}
