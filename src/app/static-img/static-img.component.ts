import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-static-img',
  templateUrl: './static-img.component.html',
  styleUrls: ['./static-img.component.scss']
})
export class StaticImgComponent {
  @Input() imgroot: string;
  @Input() img: string;
  @Input() smallerImgs: boolean;
  constructor() { }

  ngOnInit() {
  }

}
