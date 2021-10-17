import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MediasComponent } from './medias/medias.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TheGameComponent } from './the-game/the-game.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'the-game', component: TheGameComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'medias', component: MediasComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
