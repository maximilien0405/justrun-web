import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent implements OnInit {

  @Input() displayFrame: any;

  constructor() { }

  ngOnInit(): void {
  }

}
