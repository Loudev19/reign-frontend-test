import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { CardComponent } from './components/card/card.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    CardComponent,
    FormatTimePipe,
    HeaderComponent,
    SelectComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    FormatTimePipe,
    SelectComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
