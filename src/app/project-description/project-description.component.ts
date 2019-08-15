import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {
  project: Project;
  allowedHeight: number;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.currentProject.subscribe(project => this.project = project);
    
  }

}
