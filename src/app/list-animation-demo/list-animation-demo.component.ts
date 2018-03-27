import { Component, OnInit } from '@angular/core';
import { ListAnimation } from '../animations/listAnimation';

@Component({
  selector: 'app-list-animation-demo',
  templateUrl: './list-animation-demo.component.html',
  styleUrls: ['./list-animation-demo.component.css'],
  animations: [ListAnimation]
})
export class ListAnimationDemoComponent implements OnInit {

  data: Object;

  constructor() { }

  ngOnInit() {
    this.data = [
      {
        title: 'Card 1',
        content: 'A common UX feature is to sequentially animate a list of items. It would be cumbersome to define a bunch of delayed animations, which is the the problem solved by query and stagger. Query allows you select HTML elements within an animation, while stagger will build the delay interval based on the size of a collection. In this example, we query all img tags and translate them off the page, then animate them within stagger to automatically create the shutter-like effect. '
      },
      {
        title: 'Card 2',
        content: 'A common UX feature is to sequentially animate a list of items. It would be cumbersome to define a bunch of delayed animations, which is the the problem solved by query and stagger. Query allows you select HTML elements within an animation, while stagger will build the delay interval based on the size of a collection. In this example, we query all img tags and translate them off the page, then animate them within stagger to automatically create the shutter-like effect. '
      },
      {
        title: 'Card 3',
        content: 'A common UX feature is to sequentially animate a list of items. It would be cumbersome to define a bunch of delayed animations, which is the the problem solved by query and stagger. Query allows you select HTML elements within an animation, while stagger will build the delay interval based on the size of a collection. In this example, we query all img tags and translate them off the page, then animate them within stagger to automatically create the shutter-like effect. '
      },
    ];
  }

}
