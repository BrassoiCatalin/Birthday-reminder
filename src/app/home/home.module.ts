import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BirthdayTableComponent } from './birthday-table/birthday-table.component';
import { NzDividerComponent, NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddBirthdayComponent } from './add-birthday/add-birthday.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    BirthdayTableComponent,
    AddBirthdayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzIconModule
  ]
})
export class HomeModule { }
