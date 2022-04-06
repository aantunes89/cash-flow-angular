import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display summary', () => {
    const summary = fixture.nativeElement.querySelector('[data-test="summary"]')
    expect(summary).toBeTruthy();
  });

  it('should display card-container', () => {
    const cardContainer = fixture.nativeElement.querySelector(
      '[data-test="summary-card"]'
    )
    
    expect(cardContainer).toBeTruthy();
  });
  
  it('should display summary header', () => {
    const summaryHeader = fixture.nativeElement.querySelector(
      '[data-test="summary-header"]'
    )
    
    expect(summaryHeader).toBeTruthy();
  });
  
  it('should display summary header title', () => {
    const summaryHeaderTitle = fixture.nativeElement.querySelector(
      '[data-test="summary-header-title"]'
    )
    
    expect(summaryHeaderTitle).toBeTruthy();
  });
  
  it('should display summary header image', () => {
    const summaryHeaderImg = fixture.nativeElement.querySelector(
      '[data-test="summary-header-img"]'
    )
    
    expect(summaryHeaderImg).toBeTruthy();
  });
  
  it('should display summary header INCOME value', () => {
    const summaryIncome = fixture.nativeElement.querySelector(
      '[data-test="summary-income"]'
    )
    
    expect(summaryIncome).toBeTruthy();
  });

  


});
