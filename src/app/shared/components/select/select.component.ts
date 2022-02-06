import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() selected!: string
  
  @Output() select = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(): void {
    this.select.emit(this.selected)
  }

}
