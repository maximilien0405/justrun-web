import { Injectable, Input } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  itemValue = new BehaviorSubject(this.theItem);

  set theItem(value) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('lang', 'fr');
  }

  get theItem() {
    return localStorage.getItem('lang');
  }
}
