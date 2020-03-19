import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdisplayComponent } from './materialdisplay.component';

describe('MaterialdisplayComponent', () => {
  let component: MaterialdisplayComponent;
  let fixture: ComponentFixture<MaterialdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
