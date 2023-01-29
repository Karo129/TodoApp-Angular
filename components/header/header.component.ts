import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() newTodo = new EventEmitter<any>();

  newTask = '';
  errorInfo = false;

  constructor() {}
  ngOnInit(): void {}

  createNewTask() {
    if (this.newTask == '') {
      return;
    }
    const TASK = {
      newTask: this.newTask,
      isCompleted: false,
    };
    this.newTodo.emit(TASK);
    this.newTask = '';
  }
}
