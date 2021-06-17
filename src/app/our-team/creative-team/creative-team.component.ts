import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creative-team',
  templateUrl: './creative-team.component.html'
})
export class CreativeTeamComponent implements OnInit {

  @Input() allProfiles: any;


  constructor() { }

  ngOnInit(): void {
  }

}
