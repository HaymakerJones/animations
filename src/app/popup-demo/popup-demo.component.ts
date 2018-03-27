import { Component, OnInit } from '@angular/core';
import { PopupAnimation } from '../animations/popup';

@Component({
  selector: 'app-popup-demo',
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.css'],
  animations: [PopupAnimation]
})
export class PopupDemoComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit() {
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }

}
