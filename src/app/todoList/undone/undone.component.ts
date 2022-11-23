import { Component, Input, OnInit } from '@angular/core';
import { todos } from 'src/app/core/models/todos.models';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.css']
})
export class UndoneComponent implements OnInit {
  todo: Array<todos> =[]=[];
  @Input() listTodos!: todos[];
  clear = '';
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.listTodos)
    
  }

  addTodos(text: string): void {
    this.listTodos.push({
      id: this.listTodos.length,
      name: text,
      done: false,
    });

    this.clear = '';
  }

  todoStatus(todo : todos[]){
    this.todo = todo;
  }
 
  remove(id: number): void {
    this.listTodos = this.listTodos.filter(text => text.id !== id)
  }
}
