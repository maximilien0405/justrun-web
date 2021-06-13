import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html',
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
export class TheGameComponent implements OnInit {

  public frameShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayFrame() {
    this.frameShow = true;
  }

  @Input() tile: any;
  @Output() hideSharingView = new EventEmitter<boolean>();
  showLinkButtonLabel = false;
  showSendButtonLabel = false;
  email = "";
  active = "1";

  hide() {
    this.frameShow = false
  }

  sendInvitation() {
    if(this.email == undefined) {
      return
    }

  }

  changeState(): void {
    (this.active == "0") ? this.active = "1" : this.active = "0";
  }

}
