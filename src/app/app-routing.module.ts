import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContentComponent } from './project-content/project-content.component';
import { StartImagesComponent } from './start-images/start-images.component';


const routes: Routes = [
  {path: "project/:id", component: ProjectContentComponent, pathMatch: 'full'},
  {path: "index", component: StartImagesComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
