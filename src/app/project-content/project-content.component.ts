import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {
  project: Project = null;
  selectedImg: string = null;
  
  constructor(private projectService: ProjectService, private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(val => {
      console.log(this.route.snapshot.params['id']);

      this.projectService.getProject(this.route.snapshot.params['id']).subscribe({
        next: project => this.project = project
      })
    });
  }

  
  onClickImg(img: string): void{
    this.selectedImg = img;
  }

  onClickLightBox() {
    this.selectedImg = null;
  }

}
