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

  showProjectManagement = false;
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
      debugger
      console.log(this.allProfiles)
      this.lang = nextValue;
      this.reloadData();
   })
  }

  ngOnInit(): void {
    this.allProfiles = PROFILE;
    this.lang = localStorage.getItem('lang');
    this.reloadData();
  }

  changeMenu(menu: string) {
    if(menu == "project-management") {
      this.showProjectManagement = !this.showProjectManagement;
    }
    else if(menu == "creative-team") {
      this.showCreativeTeam = !this.showCreativeTeam;
    }
    else if(menu == "development") {
      this.showDeveloment = !this.showDeveloment;
    }
    else if(menu == "drawers") {
      this.showDrawers = !this.showDrawers;
    }
    else if(menu == "game-level-design") {
      this.showGameLevelDesign = !this.showGameLevelDesign;
    }
    else if(menu == "modelers") {
      this.showModelers = !this.showModelers;
    }
  }

  reloadData() {
    this.allProfiles = [...this.allProfiles];
  }

}
