import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {

  @Input() imagesList3: any;
  public lang = this.translate.currentLang

  safeURL: any;

  constructor(private translate: TranslateService, private _sanitizer: DomSanitizer) {
    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
      this.reloadData()
  });
  }

  ngOnInit(): void {}

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


  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event:
    KeyboardEvent) {
      this.hide()
   }

}
