import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html'
})
export class EnemiesComponent implements OnInit {

  public lang = this.translate.currentLang

  constructor(private translate: TranslateService) {
    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
  });
  }

  ngOnInit(): void {}

}
