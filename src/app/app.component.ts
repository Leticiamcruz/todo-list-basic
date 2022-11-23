import { Component, Input, OnInit } from '@angular/core';
import { todos } from './core/models/todos.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() listTodos : todos[]=[]; 
  todo: Array<todos> = [];
  
  ngOnInit(): void {
   
  }
 

  todoStatus(todo : todos[]){
    this.todo = todo;
  }
}
