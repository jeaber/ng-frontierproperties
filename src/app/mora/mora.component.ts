import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireData } from '../services';
@Component({
  selector: 'mora',  // <home></home>
  styleUrls: ['./mora.style.styl', './../app.component.styl'],
  templateUrl: './mora.template.html'
})
export class Mora {
  _data;
  constructor(public data: FireData) {
    this._data = data.mora;
  }

  ngOnInit() {
  }
}
