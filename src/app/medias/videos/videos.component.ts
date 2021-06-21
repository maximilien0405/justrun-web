import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {

  @Input() displayFrame: any;
  @Input() imagesList3: any;

  constructor() { }

  ngOnInit(): void {
  }

}
