import { Component, OnInit } from '@angular/core';
import { BlinkAnimation } from '../animations/blink';

@Component({
  selector: 'app-blink-demo',
  templateUrl: './blink-demo.component.html',
  styleUrls: ['./blink-demo.component.css'],
  animations: [BlinkAnimation]
})
export class BlinkDemoComponent implements OnInit {

  constructor() { }

  data: Object;

  show = false;


  ngOnInit() {
    this.data = {
      title: 'Blink demo',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    };
  }

  get showState() {
    return this.show ? 'front' : 'back';
  }

  toggle(): void {
    this.show = !this.show;
  }

}
