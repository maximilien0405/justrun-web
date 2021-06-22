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
      this.reloadData();
      if (nextValue == 'en') {
        this.lang = nextValue
      } else if(nextValue == 'en') {
        this.lang = nextValue
      }
   })
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang')
    console.log(this.lang)

    if(this.lang == 'EN') {
      this.lang = 'EN'
    }
    else if(this.lang == 'fr') {
      this.lang = 'FR'
    } else {
      this.lang = 'FR'
    }

    console.log(this.lang)

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

  @Input() tile: any;
  @Output() hideSharingView = new EventEmitter<boolean>();
  showLinkButtonLabel = false;
  showSendButtonLabel = false;
  email = "";
  active = "1";

  hide() {
    this.frameShow = false
  }
}
