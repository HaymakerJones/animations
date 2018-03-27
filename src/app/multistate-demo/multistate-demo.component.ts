import { Component, OnInit } from '@angular/core';
import { MultistateAnimation } from '../animations/multistate';

@Component({
  selector: 'app-multistate-demo',
  templateUrl: './multistate-demo.component.html',
  styleUrls: ['./multistate-demo.component.css'],
  animations: [MultistateAnimation]
})
export class MultistateDemoComponent implements OnInit {

  state = "";

  constructor() { }

  ngOnInit() {
  }

  logAnimation(event: any) {
    console.log(`${this.state} animation ${event.phaseName}`);
  }

  setState(state: string) {
    this.state = state;
  }

}
