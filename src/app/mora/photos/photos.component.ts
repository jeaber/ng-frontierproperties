import { Component } from '@angular/core';

@Component({
  selector: 'photos-mora',
  styleUrls: ['./photos.style.css'],
  templateUrl: './photos.template.html'
})
export class PhotosMora {
  storage;
  urls: string[];
  active: string[];
  isMore: string;
  constructor() {
    this.isMore = "More";
    this.urls = [
      "assets/img/mora/1.jpg",
      "assets/img/mora/2.jpg",
      "assets/img/mora/3.jpg",
      "assets/img/mora/01.jpg",
      "assets/img/mora/02.jpg",
      "assets/img/mora/03.jpg",
      "assets/img/mora/4.jpg",
      "assets/img/mora/6.png",
      "assets/img/mora/7.png",
      "assets/img/mora/5.png",
      "assets/img/mora/9.png",
    ];

    this.active = this.urls.slice(0, 3);
  }
  toggleMore() {
    if (this.active.length > 4) {
      this.active = this.urls.slice(0, 3);
      // document.getElementById("photos").style.height = "363 px";
      document.getElementById("photos").className += " hidden";
      this.isMore = "More";
    } else {
      this.active = this.urls;
      document.getElementById("photos").className = "gallery";
      this.isMore = "Less";
    }
  }
  ngOnInit() {
    for (let i = 0; i < 12; i++) {

    }
  }
}
