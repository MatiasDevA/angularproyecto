import { Output } from '@angular/core';
import { Component, OnInit , Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-task-list',
  templateUrl: './button-task-list.component.html',
  styleUrls: ['./button-task-list.component.css']
})
export class ButtonTaskListComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    this.btnClick.emit();
  }

}
