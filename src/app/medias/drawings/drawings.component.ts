import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html'
})
export class DrawingsComponent implements OnInit {

  @Input() imagesListOne: any;
  @Input() imagesListTwo: any;
  @Input() imagesListThree: any;

  constructor() { }

  ngOnInit(): void {
  }

}
