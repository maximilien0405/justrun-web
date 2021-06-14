import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativeTeamComponent } from './creative-team/creative-team.component';
import { DevelopmentComponent } from './development/development.component';
import { DrawersComponent } from './drawers/drawers.component';
import { GameLevelDesignComponent } from './game-level-design/game-level-design.component';
import { ModelersComponent } from './modelers/modelers.component';
import { OurTeamComponent } from './our-team.component';
import { ProjectManagementComponent } from './project-management/project-management.component';

const routes: Routes = [
  {
    path: '', component: OurTeamComponent, children: [
      { path: 'project-management', component: ProjectManagementComponent },
      { path: 'creative-team', component: CreativeTeamComponent },
      { path: 'development', component: DevelopmentComponent },
      { path: 'drawers', component: DrawersComponent },
      { path: 'game-level-design', component: GameLevelDesignComponent },
      { path: 'modelers', component: ModelersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurTeamRoutingModule { }
