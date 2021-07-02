import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html'
})
export class DrawingsComponent implements OnInit {

  @Input() imagesList1: any;
  public lang = this.translate.currentLang

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
      this.reloadData()
  });
  }

  ngOnInit(): void {}

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
