import { Component } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PeopleService } from '../services/people.service';


@Component({
  selector: 'app-birthday-table',
  templateUrl: './birthday-table.component.html',
  styleUrls: ['./birthday-table.component.scss']
})
export class BirthdayTableComponent {
  isFirstNameFilterVisible = false;
  isLastNameFilterVisible = false;
  isCityFilterVisible = false;

  firstNameSearchValue = '';
  lastNameSearchValue = '';
  citySearchValue = '';

  personList: Person[] = [];
  listOfDisplayPerson = [...this.personList];

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void{
    this.personList = this.peopleService.people;
    this.resetAll();
  }

  resetAll(): void {
    this.firstNameSearchValue = '';
    this.lastNameSearchValue = '';
    this.citySearchValue = '';

    this.searchByFirstName();
  }

  searchByFirstName(): void {
    this.isFirstNameFilterVisible = false;
    this.listOfDisplayPerson = this.personList.filter((item: Person) => item.firstName.indexOf(this.firstNameSearchValue) !== -1);
  }

  searchByLastName(): void {
    this.isLastNameFilterVisible = false;
    this.listOfDisplayPerson = this.personList.filter((item: Person) => item.lastName.indexOf(this.lastNameSearchValue) !== -1);
  }

  searchByCity(): void {
    this.isCityFilterVisible = false;
    this.listOfDisplayPerson = this.personList.filter((item: Person) => item.city.indexOf(this.citySearchValue) !== -1);
  }
}
