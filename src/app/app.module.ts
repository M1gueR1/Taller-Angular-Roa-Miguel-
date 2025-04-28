import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SerieModule } from './serie/serie.module';
import { SerieComponent } from "./serie/serie.component";
import { SerieListComponent } from './serie/serie-list/serie-list.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule,
    HttpClientModule,
    SerieListComponent
    
] 
,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
