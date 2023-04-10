import { Component } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-birthday-table',
  templateUrl: './birthday-table.component.html',
  styleUrls: ['./birthday-table.component.scss']
})
export class BirthdayTableComponent {
  visible = false;
  searchValue = '';
  personList: Person[] = [];

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void{
    this.personList = this.peopleService.people;
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.personList = this.personList.filter((item: Person) => item.firstName.indexOf(this.searchValue) !== -1);
  }
//foloseste doua liste pentru search
//pune iconita la search, caci e invizibil
}
