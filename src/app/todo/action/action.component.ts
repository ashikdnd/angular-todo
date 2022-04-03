import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input() taskCount: number = 0;
  @Output() deleteAll = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clearAll() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete em all!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteAll.emit();
        Swal.fire(
          'Deleted!',
          'All your tasks has been deleted.',
          'success'
        )
      }
    })
  }

}
