import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    CardComponent,
    FormatTimePipe,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FormatTimePipe
  ]
})
export class SharedModule { }
