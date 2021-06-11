import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html',
})
export class TheGameComponent implements OnInit {

  public frameShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayFrame() {
    this.frameShow = true;
  }

}
