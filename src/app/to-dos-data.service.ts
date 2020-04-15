import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDosDataService {
  list = [ "Uccidere Tyrell Wellick", 
           "Hackerare la Evil Corp", 
           "Incontrare WhiteRose", 
           "Radunare la fSociety",
            "Portare fuori Flipper"];
  constructor() { }
}
