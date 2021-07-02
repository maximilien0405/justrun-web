import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html'
})
export class PresentationComponent implements OnInit {

  public lang = this.translate.currentLang

  constructor(public translate: TranslateService) {
     this.translate.onLangChange
     .subscribe((event: LangChangeEvent) => {
       this.lang = event.lang
   });
  }

  ngOnInit(): void {}

}
