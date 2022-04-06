import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTableComponent } from './transactions-table.component';

describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display transactions table container', () => {
    const transactionsTableContainer = fixture.nativeElement.querySelector(
      '[data-test="transactions-table-container"]'
    );
    expect(transactionsTableContainer).toBeTruthy();
  });

  it('should display transactions table', () => {
    const transactionsTable = fixture.nativeElement.querySelector(
      '[data-test="transactions-table"]'
    );
    expect(transactionsTable).toBeTruthy();
  });

  it('should display transactions table head', () => {
    const transactionsTableHead = fixture.nativeElement.querySelector(
      '[data-test="transactions-table-head"]'
    );

    const transactionsTableHeadChildrens =
      fixture.nativeElement.querySelectorAll('th');

    expect(transactionsTableHead).toBeTruthy();
    expect(transactionsTableHeadChildrens.length).toBeGreaterThanOrEqual(4);
  });

  it('should display transactions table body', () => {
    const transactionsTableBody = fixture.nativeElement.querySelector(
      '[data-test="transactions-table-body"]'
    );

    expect(transactionsTableBody).toBeTruthy();
  });
});
