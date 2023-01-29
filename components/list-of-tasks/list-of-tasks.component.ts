import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css'],
})
export class ListOfTasksComponent implements OnInit {
  @Input() createdTask: any;
  @Output() deleteTodoTask = new EventEmitter<number>();
  ngOnInit() {
    console.log(this.createdTask);
  }
  toggleDone(task: any) {
    task.isCompleted = !task.isCompleted;
  }
  deleteTask(index: number) {
    this.deleteTodoTask.emit(index);
  }
}
