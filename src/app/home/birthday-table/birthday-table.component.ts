import { Component, Input } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PeopleService } from '../services/people.service';
import { DatePipe } from '@angular/common';
import { ColumnItem } from '../interfaces/column-item.interface';

@Component({
  selector: 'app-birthday-table',
  templateUrl: './birthday-table.component.html',
  styleUrls: ['./birthday-table.component.scss']
})
export class BirthdayTableComponent {

  currentDate?: string | null;
  currentDateNoYear?: string;

  isFirstNameFilterVisible = false;
  isLastNameFilterVisible = false;
  isCityFilterVisible = false;

  firstNameSearchValue = '';
  lastNameSearchValue = '';
  citySearchValue = '';

  personList: Person[] = [];
  listOfDisplayPerson = [...this.personList];

  listOfColumns: ColumnItem[] = [
    {
      name: "First Name",
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: "Last Name",
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.lastName.localeCompare(b.lastName),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: "Phone",
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.phoneNumber.localeCompare(b.phoneNumber),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: "City",
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.city.localeCompare(b.city),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: "Birthday",
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.birthDate.localeCompare(b.birthDate),
      sortDirections: ['ascend', 'descend', null]
    }
  ]

  searchText?: ''

  constructor(private peopleService: PeopleService, private datePipe: DatePipe){
    this.peopleService.personListSubject.subscribe(res =>{
      this.listOfDisplayPerson = [...res];
    })
  }

  ngOnInit(): void{
    this.personList = this.peopleService.people;
    this.updateEditCache();
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

  editCache: { [key: string]: { edit: boolean; data: Person } } = {};

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.personList.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.personList[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
    const index = this.personList.findIndex(item => item.id === id);
    Object.assign(this.personList[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.personList.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }


  /** First Name, Last Name, Phone, City, Birthday */



}
