import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdisplayComponent } from './eventdisplay.component';

describe('EventdisplayComponent', () => {
  let component: EventdisplayComponent;
  let fixture: ComponentFixture<EventdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
