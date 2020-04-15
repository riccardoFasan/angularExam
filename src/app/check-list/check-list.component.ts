import { Component, OnInit} from '@angular/core';
import { ToDosDataService } from '../to-dos-data.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  toDos = this.ToDosDataService.list;

  constructor(private ToDosDataService: ToDosDataService){

  };

  ngOnInit(): void {}

}
