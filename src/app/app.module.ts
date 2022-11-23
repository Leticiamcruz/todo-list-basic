import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoneComponent } from './todoList/done/done.component';
import { UndoneComponent } from './todoList/undone/undone.component';


@NgModule({
  declarations: [
    AppComponent,
    DoneComponent,
    UndoneComponent
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
