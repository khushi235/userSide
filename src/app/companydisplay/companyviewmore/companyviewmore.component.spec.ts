import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewmoreComponent } from './companyviewmore.component';

describe('CompanyviewmoreComponent', () => {
  let component: CompanyviewmoreComponent;
  let fixture: ComponentFixture<CompanyviewmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyviewmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
