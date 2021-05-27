import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  url = "";
  public lang: string = "FR";

  constructor(private router: Router, public translate: TranslateService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });

    translate.addLangs(['fr','en'])
    translate.setDefaultLang('fr')
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|fr/) ? browserlang: "en");
  }

  public changeLang(lang: string) {
    this.lang = lang;
  }

  ngOnInit(): void {
  }
}
