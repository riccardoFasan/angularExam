import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDos = ["Uccidere Tyrell Wellick", 
"Hackerare la Evil Corp"];
  toDo: string;

  getInput(input:string){
    this.toDo = input;
    this.toDos.push(this.toDo);
  }
}


