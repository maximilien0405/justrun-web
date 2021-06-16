import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawers',
  templateUrl: './drawers.component.html'
})
export class DrawersComponent implements OnInit {

  @Input() allProfiles: any;

  constructor() { }

  ngOnInit(): void {
  }

}
