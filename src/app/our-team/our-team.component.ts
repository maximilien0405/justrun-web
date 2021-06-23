import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Profile } from '../common/models/profile.model';
import { LangService } from '../lang.service';
import { PROFILE } from '../profile-list';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
})
export class OurTeamComponent implements OnInit {

  url = "";
  allProfiles = PROFILE;

  public lang = localStorage.getItem('lang')

  showProjectManagement = true;
  showCreativeTeam = false;
  showGameLevelDesign = false;
  showDeveloment = false;
  showModelers = false;
  showDrawers = false;

  constructor(private router: Router, private globalSrv: LangService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });

    globalSrv.itemValue.subscribe((nextValue) => {
      this.reloadData();
      if (nextValue == 'EN') {
        this.lang = 'EN'
      } else if(nextValue == 'FR') {
        this.lang = 'FR'
      }
   })
  }

  ngOnInit(): void {
    if(this.lang == 'EN') {
      this.lang = 'EN'
    }
    else if(this.lang == 'FR') {
      this.lang = 'FR'
    } else {
      this.lang = 'FR'
    }
  }

  changeMenu(menu: string) {
    if(menu == "project-management") {
      this.showProjectManagement = !this.showProjectManagement;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
    }
    else if(menu == "creative-team") {
      this.showCreativeTeam = !this.showCreativeTeam;
      this.showProjectManagement = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
    }
    else if(menu == "development") {
      this.showDeveloment = !this.showDeveloment;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDrawers = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
    }
    else if(menu == "drawers") {
      this.showDrawers = !this.showDrawers;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showGameLevelDesign = false;
      this.showModelers = false;
    }
    else if(menu == "game-level-design") {
      this.showGameLevelDesign = !this.showGameLevelDesign;
      this.showProjectManagement = false;
      this.showCreativeTeam = false;
      this.showDeveloment = false;
      this.showDrawers = false;
      this.showModelers = false;
    }
    else if(menu == "modelers") {
      this.showModelers = !this.showModelers;
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
