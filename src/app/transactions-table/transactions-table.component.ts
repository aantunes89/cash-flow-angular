import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent implements OnInit {
  placeholderDate = new Date(10, 12, 2021).toLocaleDateString('pt-BR');
  constructor() {}

  ngOnInit(): void {}
}
