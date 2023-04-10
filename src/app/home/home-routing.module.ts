import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayTableComponent } from './birthday-table/birthday-table.component';

const routes: Routes = [{ path: '', component: BirthdayTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
