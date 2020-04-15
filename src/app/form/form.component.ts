import { Component, OnInit} from '@angular/core';
import { ToDosDataService } from '../to-dos-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  action: string;
  toDos = this.ToDosDataService.list;
  toDo: string;

  constructor(private ToDosDataService: ToDosDataService){
    this.action = "Aggiungi";
  }

  ngOnInit(): void {
  }

  getInputValue(input:string){
    this.toDo = input;
    if(!this.toDos.includes(String(this.toDo)) && String(this.toDo) !== ""){
      this.toDos.push(this.toDo);
    } else {
      document.getElementById("error").style.display = "block";
      setTimeout( () => {
        document.getElementById("error").style.display = "none";
      }, 2500);
    }
  }
}
