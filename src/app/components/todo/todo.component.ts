import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  title="Todo";
  todos:Todo[] = [];
  ngOnInit(): void {
    this.todos = [
      {
        content: 'first content',
        completed: true
      },
      {
        content: 'second content',
        completed: false
      }
    ]
  }
  toggleDone(id: number){
    this.todos.map((v,i) =>{
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }
}
