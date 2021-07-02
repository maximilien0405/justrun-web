import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent implements OnInit {

  @Input() imagesList2: any;
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
    this.imagesList2 = [...this.imagesList2];
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
