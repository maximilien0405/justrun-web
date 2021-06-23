import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LangService } from '../../lang.service';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html'
})
export class DrawingsComponent implements OnInit {

  @Input() imagesList1: any;
  public lang = localStorage.getItem('lang')

  constructor(private globalSrv: LangService) {
   
    globalSrv.itemValue.subscribe((nextValue) => {
      if (nextValue == 'EN') {
        this.lang = 'EN'
      } else if(nextValue == 'FR') {
        this.lang = 'FR'
      }
   })
  }

  ngOnInit(): void {
    if(this.lang == 'EN') {
      this.lang = 'EN'
    }
    else if(this.lang == 'FR') {
      this.lang = 'FR'
    } else {
      this.lang = 'FR'
    }
  }

  reloadData() {
    this.imagesList1 = [...this.imagesList1];
  }

  public frameShow:boolean = false;
  imageLink:string = "";
  imageDescriptionFR:string = "";
  imageDescriptionEN:string = "";

  displayFrame(link:string, descriptionFR:string, descriptionEN:string) {
    this.frameShow = true;
    this.imageLink = link;
    this.imageDescriptionFR = descriptionFR;
    this.imageDescriptionEN = descriptionEN;
  }

  hide() {
    this.frameShow = false
  }
}
