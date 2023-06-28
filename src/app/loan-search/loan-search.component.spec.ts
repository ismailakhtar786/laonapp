import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSearchComponent } from './loan-search.component';

describe('LoanSearchComponent', () => {
  let component: LoanSearchComponent;
  let fixture: ComponentFixture<LoanSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
