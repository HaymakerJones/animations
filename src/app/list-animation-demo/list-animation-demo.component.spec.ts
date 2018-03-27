import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimationDemoComponent } from './list-animation-demo.component';

describe('ListAnimationDemoComponent', () => {
  let component: ListAnimationDemoComponent;
  let fixture: ComponentFixture<ListAnimationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnimationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
