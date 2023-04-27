import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderInfoComponent } from './reminder-info/reminder-info.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ReminderInfoComponent
  ],
  imports: [
    CommonModule,
    ReminderRoutingModule
  ],
  exports:[
    ReminderInfoComponent
  ],
  providers: [
    DatePipe
  ]
})
export class ReminderModule { }
