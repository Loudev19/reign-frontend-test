import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title!: string;
  @Input() created_at!: Date;
  @Input() author!: string;
  @Input() url!: string;
  @Input() is_favorite!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
