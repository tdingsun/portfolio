import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  showAbout = false;
  aboutimgs = ['0.png'];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
    this.getSelectedProject();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  getSelectedProject(): void {
    this.selectedProject = this.projectService.getSelectedProject();
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.projectService.setSelectedProject(this.selectedProject);
    this.showAbout = false;
  }

  aboutClicked() {
    this.projectService.setSelectedProject(null);
    this.selectedProject = null;
    if(this.showAbout == false){
      this.showAbout = true;
    } else {
      this.showAbout = false;
    }
  }

}
