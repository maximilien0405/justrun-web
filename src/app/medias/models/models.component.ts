import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LangService } from '../../lang.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent implements OnInit {

  @Input() imagesList2: any;
  public lang = localStorage.getItem('lang')

  constructor(private globalSrv: LangService) {
    globalSrv.itemValue.subscribe((nextValue) => {
      this.lang = nextValue;
      this.reloadData();
   })
  }
  
  reloadData() {
    this.imagesList2 = [...this.imagesList2];
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
