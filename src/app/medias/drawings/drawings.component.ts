import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html'
})
export class DrawingsComponent implements OnInit {

  @Input() imagesList1: any;
  @Input() displayFrame: any;

  @Input() drawingImage:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.drawingImage)
  }



}
