import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkDemoComponent } from './blink-demo.component';

describe('BlinkDemoComponent', () => {
  let component: BlinkDemoComponent;
  let fixture: ComponentFixture<BlinkDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
