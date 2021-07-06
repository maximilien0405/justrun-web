import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-art-dir',
  templateUrl: './art-dir.component.html'
})
export class ArtDirComponent implements OnInit {

  public lang = this.translate.currentLang

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
  });
  }

  ngOnInit(): void {}

}
