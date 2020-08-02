import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWebComponent } from './time-web.component';

describe('TimeWebComponent', () => {
  let component: TimeWebComponent;
  let fixture: ComponentFixture<TimeWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
