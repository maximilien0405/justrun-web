import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html'
})
export class DevelopmentComponent implements OnInit {

  @Input() allProfiles: any;


  constructor() { }

  ngOnInit(): void {
  }

}
