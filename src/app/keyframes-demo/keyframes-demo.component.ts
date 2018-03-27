import { Component, OnInit } from '@angular/core';
import { keyFramesAnimation } from '../animations/keyframes';

@Component({
  selector: 'app-keyframes-demo',
  templateUrl: './keyframes-demo.component.html',
  styleUrls: ['./keyframes-demo.component.css'],
  animations: [keyFramesAnimation]
})
export class KeyframesDemoComponent implements OnInit {

  kfState = false;

  constructor() { }

  ngOnInit() {
  }

  get state() {
    return this.kfState ? 'move' : '';
  }

  toggle() {
    setTimeout(() => this.kfState = true, 1000);
    this.kfState = false;
  }

}
