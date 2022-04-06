import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { DashboardComponent } from './dashboard.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SummaryComponent,
    TransactionsTableComponent,
  ],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboadModule {}
