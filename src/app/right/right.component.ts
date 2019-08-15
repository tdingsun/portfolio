import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Animations } from '../animations';
@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  animations: [Animations.inOutAnimation]
})
export class RightComponent implements OnInit {
  project: Project;
  selectedImg: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

  onClickImg(img: string): void{
    this.selectedImg = img;
  }

  onClickLightBox() {
    this.selectedImg = null;
  }

  

}
