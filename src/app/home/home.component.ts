import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('transitionBackground', [
      state('1', style({
        // When the button settings appear
        background: 'rgba(194,194,194,0.19)',
      })),
      state('0', style({
        background: 'rgb(69 162 240 / 75%)',

      })),
      transition('* => *', animate(500))
    ])
  ]
})

export class HomeComponent implements OnInit {

  public frameShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayFrame() {
    this.frameShow = true;
  }

  hide() {
    this.frameShow = false
  }

}
