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

  reloadData() {
    this.allProfiles = [...this.allProfiles];
  }

}
