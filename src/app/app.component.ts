import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './lang.service';
import { fadeAnimation } from './animations/fade.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [''],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  url = "";
  public lang = localStorage.getItem('lang')

  displayDropdown: boolean = false;
  rotateHamburger: boolean = false;

  constructor(private router: Router, public translate: TranslateService, private globalSrv: LangService) {
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
    this.globalSrv.theItem = lang; // this change will broadcast to every subscriber like below component
  }

  dropdown() {
    this.displayDropdown = !this.displayDropdown;
  }

  // public getRouterOutletState(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }

  ngOnInit(): void {}
}
