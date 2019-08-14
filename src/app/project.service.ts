import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from './project'; 
import { PROJECTS } from './project-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  selectedProject: Project;

  private projectSource = new BehaviorSubject(this.selectedProject);
  currentProject = this.projectSource.asObservable();

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  setSelectedProject(project: Project): void {
    this.selectedProject = project;
    this.projectSource.next(project);
  }

  getSelectedProject(): Project {
    return this.selectedProject;
  }
}
