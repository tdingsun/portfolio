import { Component, OnInit, OnChanges } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Animations } from '../animations';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  animations: [Animations.inOutAnimation]
})
export class RightComponent implements OnInit, OnChanges {
  project: Project;
  selectedImg: string;
  padding: number;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.currentProject.subscribe(project => this.project = project);
  }

  ngOnChanges(){
    this.project = null;
  }

  onClickImg(img: string): void{
    this.selectedImg = img;
  }

  onClickLightBox() {
    this.selectedImg = null;
  }
  
  scrollUp() {
    var posInterval = window.pageYOffset/20;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - posInterval); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 16);
  }

}
