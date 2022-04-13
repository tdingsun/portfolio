import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Animations } from '../animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  animations: [Animations.inOutAnimation]
})
export class LeftComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project;
  showAbout = false;

  constructor(private projectService: ProjectService, private router:Router, private route:ActivatedRoute) { 
  }

  ngOnInit() {
    
    this.projectService.getProjects().subscribe({
      next: projects => {
        this.projects = projects;
        this.selectedProject = projects.find(p => p.imgRoot === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))
      }
    })
  }

  onSelect(project: Project): void {
    if(this.selectedProject === project) {
      console.log('here');
      console.log(this.route);
      this.selectedProject = null;

      this.router.navigateByUrl('/index');

    } else {
      this.selectedProject = project;
      this.router.navigate([`/project/${project.imgRoot}`])
    }

  }

  aboutClicked() {
    this.showAbout = !this.showAbout
  }
}
