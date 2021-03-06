import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingsComponent } from './drawings/drawings.component';
import { MediasComponent } from './medias.component';
import { ModelsComponent } from './models/models.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {
    path: '', component: MediasComponent, children: [
      { path: 'drawings', component: DrawingsComponent },
      { path: 'models', component: ModelsComponent },
      { path: 'videos', component: VideosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurTeamRoutingModule { }
