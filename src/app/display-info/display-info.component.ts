import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css'],
})
export class DisplayInfoComponent implements OnInit {

  info ='';

  setInfo = (info) => {
    this.info = info;
  }

  getInfo = () => {
    return this.info;
  }

  constructor() { }

  ngOnInit() {
  }

}
