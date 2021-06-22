import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LangService } from '../../lang.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html'
})
export class VideosComponent implements OnInit {

  @Input() imagesList3: any;
  public lang = localStorage.getItem('lang')

  constructor(private globalSrv: LangService) {
    globalSrv.itemValue.subscribe((nextValue) => {
      this.lang = nextValue;
      this.reloadData();
   })
  }

  reloadData() {
    this.imagesList3 = [...this.imagesList3];
  }

  ngOnInit(): void {
    this.lang = "FR";
  }

  public frameShow:boolean = false;
  imageLink:string = "";
  imageDescriptionFR:string = "";
  imageDescriptionEN:string = "";

  displayFrame(link:string, descriptionFR:string, descriptionEN:string) {
    this.frameShow = true;
    this.imageLink = link;
    this.imageDescriptionFR = descriptionFR;
    this.imageDescriptionEN = descriptionEN;
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
