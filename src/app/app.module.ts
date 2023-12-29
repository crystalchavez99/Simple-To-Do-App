import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]  // a component that initiates or starts the Angular application
})
export class AppModule { }
