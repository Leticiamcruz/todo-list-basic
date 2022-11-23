import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todos } from 'src/app/core/models/todos.models';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  todo: Array<todos> =[];
  @Input() listTodos : todos[]=[]; 
  @Output() allTodoStatus = new EventEmitter<todos[]>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.listTodos)
  }

  todoStatus(): void {
    console.log(this.allTodoStatus.emit(this.listTodos))
  }


}
