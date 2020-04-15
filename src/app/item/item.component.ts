import { Component, OnInit, Input } from '@angular/core';
import { ToDosDataService } from '../to-dos-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  toDos = this.ToDosDataService.list;
  marked: boolean;

  @Input() toDo: string;

  constructor(private ToDosDataService: ToDosDataService) {
    this.marked = false;
  }

  ngOnInit(): void {}

  tickItem(){
    this.marked = !this.marked;
  }

  removeItem(){
    let index = this.toDos.indexOf(String(this.toDo));
      if (index > -1) {
        this.toDos.splice(index, 1);
      }
  }

}
