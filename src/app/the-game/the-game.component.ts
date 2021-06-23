import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html'
})
export class TheGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showPresentation = true;
  showStoryline = false;
  showArtisticDirection = false;
  showGameplay = false;
  showEnemies = false;


  changeMenu(menu: string) {
    if(menu == "presentation") {
      this.showPresentation = !this.showPresentation;
      this.showStoryline = false;
      this.showArtisticDirection = false;
      this.showGameplay = false;
      this.showEnemies = false;
    }
    else if(menu == "storyline") {
      this.showPresentation = false;
      this.showStoryline = !this.showStoryline;
      this.showArtisticDirection = false;
      this.showGameplay = false;
      this.showEnemies = false;
    }
    else if(menu == "artistic-direction") {
      this.showPresentation = false;
      this.showStoryline = false;
      this.showArtisticDirection = !this.showArtisticDirection;
      this.showGameplay = false;
      this.showEnemies = false;
    }
    else if(menu == "gameplay") {
      this.showPresentation = false;
      this.showStoryline = false;
      this.showArtisticDirection = false;
      this.showGameplay = !this.showGameplay;
      this.showEnemies = false;
    }
    else if(menu == "enemies") {
      this.showPresentation = false;
      this.showStoryline = false;
      this.showArtisticDirection = false;
      this.showGameplay = false;
      this.showEnemies = !this.showEnemies;
    }
  }

}
