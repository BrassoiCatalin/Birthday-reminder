import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BirthdayTableComponent } from './birthday-table/birthday-table.component';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BirthdayTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzDividerModule,
    NzTableModule,
    NzDropDownModule,
    FormsModule
  ]
})
export class HomeModule { }
