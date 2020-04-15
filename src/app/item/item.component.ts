import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  marked: boolean;

  @Input() toDo: string;

  constructor() {
    this.marked = false;
  }

  ngOnInit(): void {}

  tickItem(){
    this.marked = !this.marked;
  }

}
