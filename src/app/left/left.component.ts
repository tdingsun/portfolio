import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Animations } from '../animations';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  animations: [Animations.inOutAnimation]
})
export class LeftComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  showAbout = false;
  aboutimgs = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
    this.getSelectedProject();
    this.shuffleImages();
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

  shuffleImages(): void {
    var array = [];
    for (let i = 1; i <= 27; i++){
      array.push(i + ".jpg");
    }
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.aboutimgs = array;
  }

}
