import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { HomeItemComponent } from './mycomponents/home-item/home-item.component';
import { AddHomeComponent } from './mycomponents/add-home/add-home.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { AboutComponent } from './mycomponents/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeItemComponent,
    AddHomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
