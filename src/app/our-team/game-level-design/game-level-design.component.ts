import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-level-design',
  templateUrl: './game-level-design.component.html'
})
export class GameLevelDesignComponent implements OnInit {

  @Input() allProfiles: any;

  constructor() { }

  ngOnInit(): void {
  }

}
