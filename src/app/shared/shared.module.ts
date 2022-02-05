import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [
    CardComponent,
    FormatTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    FormatTimePipe
  ]
})
export class SharedModule { }
