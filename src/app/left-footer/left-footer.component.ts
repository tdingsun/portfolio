import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-left-footer',
  templateUrl: './left-footer.component.html',
  styleUrls: ['./left-footer.component.scss']
})
export class LeftFooterComponent implements OnInit {
  project: Project;
  footerHeight: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

}
