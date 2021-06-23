import { Component, OnInit } from '@angular/core';
import { LangService } from '../../lang.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html'
})
export class EnemiesComponent implements OnInit {

  public lang = localStorage.getItem('lang')

  constructor(private globalSrv: LangService) {
   
    globalSrv.itemValue.subscribe((nextValue) => {
      if (nextValue == 'EN') {
        this.lang = 'EN'
      } else if(nextValue == 'FR') {
        this.lang = 'FR'
      }
   })
  }

  ngOnInit(): void {
    if(this.lang == 'EN') {
      this.lang = 'EN'
    }
    else if(this.lang == 'FR') {
      this.lang = 'FR'
    } else {
      this.lang = 'FR'
    }
  }

}
