import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html'
})
export class GameplayComponent implements OnInit {

  public lang = this.translate.currentLang

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
  });
  }

  ngOnInit(): void {}

}
