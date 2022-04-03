import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  newTaskCreated(task: string) {
    this.taskList.unshift(task);
  }

  delAllTasks() {
    this.taskList = [];
  }

}
