import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Profile } from '../common/models/profile.model';
import { PROFILE } from '../profile-list';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
})
export class OurTeamComponent implements OnInit {

  url = "";
  allProfiles = PROFILE;

  public lang = this.translate.currentLang

  showProjectManagement = true;
  showCreativeTeam = false;
  showGameLevelDesign = false;
  showDeveloment = false;
  showModelers = false;
  showDrawers = false;
  showSoundDesign = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });

    this.translate.onLangChange
    .subscribe((event: LangChangeEvent) => {
      this.lang = event.lang
      this.reloadData()
  });
  }

  ngOnInit(): void {}

  changeMenu(menu: string) {
    if(menu == "project-management") {
      this.showProjectManagement = !this.showProjectManagement;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
      this.showSoundDesign = false;
    }
    else if(menu == "creative-team") {
      this.showCreativeTeam = !this.showCreativeTeam;
      this.showProjectManagement = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
      this.showSoundDesign = false;
    }
    else if(menu == "development") {
      this.showDeveloment = !this.showDeveloment;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
      this.showSoundDesign = false;
    }
    else if(menu == "drawers") {
      this.showDrawers = !this.showDrawers;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
      this.showSoundDesign = false;
    }
    else if(menu == "game-level-design") {
      this.showGameLevelDesign = !this.showGameLevelDesign;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showModelers = false;
      this.showSoundDesign = false;
    }
    else if(menu == "modelers") {
      this.showModelers = !this.showModelers;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showSoundDesign = false;
    }
    else if(menu == "sound-design") {
      this.showSoundDesign = !this.showSoundDesign;
      this.showModelers = false;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
    }
  }

  reloadData() {
    this.allProfiles = [...this.allProfiles];
  }

}
