import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listTasks: any[] = [];
  enterTask(task: any){
    this.listTasks.push(task);
  }
  eliminateTask(index: number){
    this.listTasks.splice(index,1); 
}
}