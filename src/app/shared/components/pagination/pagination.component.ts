import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number = 0
  @Output() goTo = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onChangePage(page: number): void {
    this.page = page
    this.goTo.emit(page)
  }
}
