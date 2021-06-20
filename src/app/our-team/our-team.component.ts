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
      this.lang = nextValue;
      this.reloadData();
   })
  }

  ngOnInit(): void {
    this.lang = "FR";
  }

  changeMenu(menu: string) {
    this.showProjectManagement = false;
    this.showCreativeTeam = false;
    this.showGameLevelDesign = false;
    this.showDeveloment = false;
    this.showDrawers = false;
    this.showModelers = false;

    if(menu == "project-management") {
      this.showProjectManagement = true;
    }
    else if(menu == "creative-team") {
      this.showCreativeTeam = true;
    }
    else if(menu == "development") {
      this.showDeveloment = true;
    }
    else if(menu == "drawers") {
      this.showDrawers = true;
    }
    else if(menu == "game-level-design") {
      this.showGameLevelDesign = true;
    }
    else if(menu == "modelers") {
      this.showModelers = true;
    }
  }

  reloadData() {
    this.allProfiles = [...this.allProfiles];
  }

}
