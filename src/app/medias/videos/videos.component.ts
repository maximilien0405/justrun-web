import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LangService } from '../../lang.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {

  @Input() imagesList3: any;
  public lang = localStorage.getItem('lang')

  safeURL: any;

  constructor(private globalSrv: LangService, private _sanitizer: DomSanitizer) {

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
    this.imagesList3 = [...this.imagesList3];
  }

  public frameShow:boolean = false;
  imageLink:string = "";
  imageDescriptionFR:string = "";
  imageDescriptionEN:string = "";

  displayFrame(link:string, descriptionFR:string, descriptionEN:string) {
    this.frameShow = true;
    this.imageLink = this._sanitizer.bypassSecurityTrustResourceUrl(link) as string;
    this.imageDescriptionFR = descriptionFR;
    this.imageDescriptionEN = descriptionEN;
  }

  hide() {
    this.frameShow = false
  }

}
