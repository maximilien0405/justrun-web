import { Component, OnInit } from '@angular/core';
import { Image } from '../common/models/image.model';
import { IMAGEcolONE, IMAGEcolTWO, IMAGEcolTHREE } from '../image-list';


@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
})
export class MediasComponent implements OnInit {

  imagesListOne = IMAGEcolONE;
  imagesListTwo = IMAGEcolTWO;
  imagesListThree = IMAGEcolTHREE;

  constructor() { }

  ngOnInit(): void {
  }

}
