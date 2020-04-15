import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
action: string;

@Output() clicked = new EventEmitter<string>();


  constructor() {
    this.action = "Aggiungi";
   }

  ngOnInit(): void {
  }

  getInputValue(input){
    console.log("Input Value:",input);
    this.clicked.emit(input);
  }
}
