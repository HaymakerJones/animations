import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinDemoComponent } from './spin-demo.component';

describe('SpinDemoComponent', () => {
  let component: SpinDemoComponent;
  let fixture: ComponentFixture<SpinDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
