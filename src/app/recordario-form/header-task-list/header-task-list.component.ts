import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-task-list',
  templateUrl: './header-task-list.component.html',
  styleUrls: ['./header-task-list.component.css']
})
export class HeaderTaskListComponent implements OnInit {

  title:string = "My task list";
  constructor() { }

  ngOnInit(): void {
  }


  toggleAddTask(){
    console.log("clicked toggleaddtask");
  }
}
