import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modelers',
  templateUrl: './modelers.component.html'
})
export class ModelersComponent implements OnInit {

  @Input() allProfiles: any;

  constructor() { }

  ngOnInit(): void {
  }

}
