import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyComponent } from './lazy/lazy.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [AppComponent,LazyComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
