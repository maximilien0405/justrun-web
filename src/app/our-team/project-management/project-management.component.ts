import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LangService } from 'src/app/lang.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html'
})
export class ProjectManagementComponent implements OnInit {
  @Input() allProfiles: any;

  constructor(private langService: LangService) {}

  ngOnInit(): void {
  }
  
}
