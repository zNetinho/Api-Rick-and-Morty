import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentComponent } from './module/component/component.component';
import { ListPersonagemComponent } from './module/component/list-personagem/list-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ListPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
