import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html'
})
export class ProjectManagementComponent implements OnInit {

  @Input() allProfiles: any;

  constructor() { }

  ngOnInit(): void {
  }

}
