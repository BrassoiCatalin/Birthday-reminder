import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayTableComponent } from './birthday-table/birthday-table.component';
import { AddBirthdayComponent } from './add-birthday/add-birthday.component';

const routes: Routes = [
  { path: '', component: BirthdayTableComponent },
  { path: 'add', component: AddBirthdayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
