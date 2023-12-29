import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './components/todo/todo.component';



@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule
  ],
  providers: [],

  bootstrap: [AppComponent]  // a component that initiates or starts the Angular application
})
export class AppModule { }
