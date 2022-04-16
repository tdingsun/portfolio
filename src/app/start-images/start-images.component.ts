import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-images',
  templateUrl: './start-images.component.html',
  styleUrls: ['./start-images.component.scss']
})
export class StartImagesComponent implements OnInit {
  aboutimgs = [];
  
  constructor() { }

  ngOnInit() {
    this.shuffleImages();
  }

  shuffleImages(): void {
    var array = [];
    for (let i = 1; i <= 136; i++){
      array.push(i + ".jpg");
    }
    for (let i = 1; i <= 34; i++){
      array.push(i + ".png");
    }
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.aboutimgs = array;
  }

}
