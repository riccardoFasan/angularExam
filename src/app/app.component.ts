import { Component } from '@angular/core';
import { ToDosDataService } from './to-dos-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDosDataService]
})
export class AppComponent {

}


