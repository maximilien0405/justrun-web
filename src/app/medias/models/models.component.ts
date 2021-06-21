import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent implements OnInit {

  @Input() imagesList2: any;

  constructor() { }

  ngOnInit(): void {
  }

  public frameShow:boolean = false;
  imageLink:string = "";
  imageDescription:string = "";

  displayFrame(link:string, description:string) {
    this.frameShow = true;
    this.imageLink = link;
    this.imageDescription = description;
  }

  @Input() tile: any;
  @Output() hideSharingView = new EventEmitter<boolean>();
  showLinkButtonLabel = false;
  showSendButtonLabel = false;
  email = "";
  active = "1";

  hide() {
    this.frameShow = false
  }

}
