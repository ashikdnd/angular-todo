import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.css']
})
export class ComposerComponent implements OnInit {

  @Output() taskCreated = new EventEmitter();

  task: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
   if (this.task.trim().length) {
     this.taskCreated.emit(this.task);
     this.task = '';
   }
  }

}
