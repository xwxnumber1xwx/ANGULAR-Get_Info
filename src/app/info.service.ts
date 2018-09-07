import { Injectable } from '@angular/core';
import { DisplayInfoComponent } from '../app/display-info/display-info.component'

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  constructor(private displayInfoComponent: DisplayInfoComponent) { }

  getInfo = () => {
    return this.displayInfoComponent.getInfo();
  }

  setInfo = (info) => {
    console.log(info);
    this.displayInfoComponent.setInfo(info);
  }
}
