import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [''],
})
export class AppComponent implements OnInit {
  url = "";
  public lang = this.translate.currentLang
   displayDropdown: boolean = false;
  rotateHamburger: boolean = false;

  constructor(private router: Router, public translate: TranslateService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });

    translate.addLangs(['fr','en'])
    translate.setDefaultLang('en')

    /* Code pour trouver langue user */

    let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language;

    let shortLang = lang;
    if (shortLang.indexOf('-') !== -1)
        shortLang = shortLang.split('-')[0];

    if (shortLang.indexOf('_') !== -1)
        shortLang = shortLang.split('_')[0];

    /* ----------------- */

    if (shortLang == "fr") {
      translate.use('fr')
    } else {
      translate.use('en')
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang)
  }

  dropdown() {
    this.displayDropdown = !this.displayDropdown;
  }

  ngOnInit(): void {}
}
