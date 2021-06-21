import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Image } from '../common/models/image.model';
import { IMAGEList1, IMAGEList2, IMAGEList3 } from '../image-list';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';
@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
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
export class MediasComponent implements OnInit {

  url = "";

  showDrawings = true;
  showModels = false;
  showVideos = false;
  showMusics = false;

  imagesList1 = IMAGEList1;
  imagesList2 = IMAGEList2;
  imagesList3 = IMAGEList3;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });
  }

  ngOnInit(): void {
  }

  changeMenu(menu: string) {
    this.showDrawings = false;
    this.showModels = false;
    this.showVideos = false;
    this.showMusics = false

    if(menu == "drawings") {
      this.showDrawings = true;
    }
    else if(menu == "models") {
      this.showModels = true;
    }
    else if(menu == "videos") {
      this.showVideos = true;
    }
    else if(menu == "musics") {
      this.showMusics = true;
    }
  }
}
