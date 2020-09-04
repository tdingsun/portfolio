import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-left-footer',
  templateUrl: './left-footer.component.html',
  styleUrls: ['./left-footer.component.scss']
})
export class LeftFooterComponent implements OnInit {
  @Input() project: Project;
  footerHeight: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    
  }

}
