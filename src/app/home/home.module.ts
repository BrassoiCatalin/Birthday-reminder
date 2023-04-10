import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BirthdayTableComponent } from './birthday-table/birthday-table.component';


@NgModule({
  declarations: [
    BirthdayTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
