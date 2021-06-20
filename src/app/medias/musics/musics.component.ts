import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html'
})
export class MusicsComponent implements OnInit {

  @Input() displayFrame: any;

  constructor() { }

  ngOnInit(): void {
  }

}
