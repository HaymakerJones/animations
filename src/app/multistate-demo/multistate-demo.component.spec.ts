import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistateDemoComponent } from './multistate-demo.component';

describe('MultistateDemoComponent', () => {
  let component: MultistateDemoComponent;
  let fixture: ComponentFixture<MultistateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultistateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
