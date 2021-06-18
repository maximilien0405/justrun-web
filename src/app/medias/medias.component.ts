import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Image } from '../common/models/image.model';
import { IMAGEcolONE, IMAGEcolTWO, IMAGEcolTHREE } from '../image-list';


@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
})
export class MediasComponent implements OnInit {

  url = "";

  showDrawings = true;
  showModels = false;
  showVideos = false;
  showMusics = false;


  imagesListOne = IMAGEcolONE;
  imagesListTwo = IMAGEcolTWO;
  imagesListThree = IMAGEcolTHREE;

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