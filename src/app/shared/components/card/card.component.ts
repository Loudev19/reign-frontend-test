import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { New } from '../../interfaces/new';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() value!: New;

  @Output() deleteFavorite = new EventEmitter<void>();

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  updateFavorite(): void {
    if (this.value.is_favorite) {
      this.value.is_favorite = false
      this.localStorageService.removeFavorite(this.value)
      this.deleteFavorite.emit()
    } else {
      this.value.is_favorite = true
      this.localStorageService.saveFavorite(this.value)
    }
  }

}
