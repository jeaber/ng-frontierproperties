import { Component } from '@angular/core';

@Component({
  selector: 'photos',  // <home></home>
  styleUrls: ['./photos.style.css', './../../mora/photos/photos.styl'],
  templateUrl: './photos.template.html'
})
export class Photos {
  storage;
  urls: Array<string>;
  active: Array<string>;
  isMore: string;
  largeUrl: string;

  constructor() {
    const context = this;
    this.isMore = "More";
    this.urls = [
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F0.jpg?alt=media&token=150fbb35-bf3b-4d0a-8028-0f93f3420e6f",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F1.jpg?alt=media&token=73effa33-4760-4d49-b4b0-b8c73893e5ea",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F2.jpg?alt=media&token=3819e3a4-5178-4d8c-a967-210e9b55782f",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F3.jpg?alt=media&token=f7177fa6-db8b-451c-94f2-1575674d8a4c",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F4.jpg?alt=media&token=0749e577-d51e-41a5-a989-419b8650b409",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F5.jpg?alt=media&token=29426576-2584-4c44-bcf4-76bc387d8a15",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F6.jpg?alt=media&token=2b12b2a1-95e7-4e6d-bf0d-5c2f5f6922a6",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F7.jpg?alt=media&token=47008782-b16e-4fdf-a0c0-130b2ec7d7bd",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F8.jpg?alt=media&token=f1753308-ba8c-4ba6-8bb3-a1186552ddef",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F9.jpg?alt=media&token=b2b2d3ca-e2e9-4355-861a-2cb0d0deca95",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F10.jpg?alt=media&token=48ce941b-a560-41fe-9902-31914e4871db",
      "https://firebasestorage.googleapis.com/v0/b/frontier-properties.appspot.com/o/pinecity%2Fphotos%2F11.jpg?alt=media&token=e8fa306a-d974-4838-a48e-1ea70f230e2b"
    ];
    this.active = this.urls.slice(0, 3);
  }
  toggleMore() {
    if (this.active.length > 4) {
      this.active = this.urls.slice(0, 3);
      //document.getElementById("photos").style.height = "363 px";
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