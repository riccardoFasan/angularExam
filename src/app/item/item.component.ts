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
  //test: string; 
  @Input() toDo: string;

  constructor(private ToDosDataService: ToDosDataService) {
    this.marked = false;
  //  this.test = "Uccidere Tyrell Wellick";
  }

  ngOnInit(): void {}

  tickItem(){
    this.marked = !this.marked;
  }

  removeItem(item:string){
    console.log("Array before: ",this.toDos);
    console.log("Item: ",item);
    let index = this.toDos.indexOf(String(this.toDo));
    console.log("Index of element: ",index)
      if (index > -1) {
        let test = this.toDos.splice(index, 1);
        console.log("Test: ",test);
      }
    console.log("Array after: ",this.toDos);
  }

}
