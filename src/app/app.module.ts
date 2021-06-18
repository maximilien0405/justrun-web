import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheGameComponent } from './the-game/the-game.component';
import { MediasComponent } from './medias/medias.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectManagementComponent } from './our-team/project-management/project-management.component';
import { CreativeTeamComponent } from './our-team/creative-team/creative-team.component';
import { GameLevelDesignComponent } from './our-team/game-level-design/game-level-design.component';
import { DevelopmentComponent } from './our-team/development/development.component';
import { DrawersComponent } from './our-team/drawers/drawers.component';
import { ModelersComponent } from './our-team/modelers/modelers.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawingsComponent } from './medias/drawings/drawings.component';
import { ModelsComponent } from './medias/models/models.component';
import { VideosComponent } from './medias/videos/videos.component';
import { DocsComponent } from './medias/docs/docs.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TheGameComponent,
    MediasComponent,
    OurTeamComponent,
    ContactUsComponent,
    ProjectManagementComponent,
    CreativeTeamComponent,
    GameLevelDesignComponent,
    DevelopmentComponent,
    DrawersComponent,
    ModelersComponent,
    DrawingsComponent,
    ModelsComponent,
    VideosComponent,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
