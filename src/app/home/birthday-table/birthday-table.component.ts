import { Component, Input } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PeopleService } from '../services/people.service';
import { DatePipe } from '@angular/common';
import { ColumnItem } from '../interfaces/column-item.interface';
import _, { words } from 'lodash';

@Component({
  selector: 'app-birthday-table',
  templateUrl: './birthday-table.component.html',
  styleUrls: ['./birthday-table.component.scss'],
})
export class BirthdayTableComponent {
  currentDate?: string | null;
  currentDateNoYear?: string;

  isFirstNameFilterVisible = false;
  isLastNameFilterVisible = false;
  isCityFilterVisible = false;

  personList: Person[] = [];
  displayPersonList = [...this.personList];

  listOfColumns: ColumnItem[] = [
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Last Name',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.lastName.localeCompare(b.lastName),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Phone',
      sortOrder: null,
      sortFn: (a: Person, b: Person) =>
        a.phoneNumber.localeCompare(b.phoneNumber),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'City',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.city.localeCompare(b.city),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Birthday',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.birthDate.localeCompare(b.birthDate),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Actions',
      sortOrder: null,
      sortFn: null,
      sortDirections: [null, null, null],
    },
  ];

  searchValue: String = '';

  constructor(
    private peopleService: PeopleService,
    private datePipe: DatePipe
  ) {
    this.peopleService.personListSubject.subscribe((res) => {
      this.displayPersonList = [...res];
    });
  }

  ngOnInit(): void {
    this.personList = this.peopleService.people;
    this.displayPersonList = this.personList;
    this.updateEditCache();
  }

  editCache: { [key: string]: { edit: boolean; data: Person } } = {};

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: number): void {
    const index = this.personList.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.personList[index] },
      edit: false,
    };
  }

  saveEdit(id: number): void {
    const index = this.personList.findIndex((item) => item.id === id);
    Object.assign(this.personList[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.personList.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item },
      };
    });
  }

  onInputFilterList() {
    this.displayPersonList = [];
    let searchValue = this.searchValue;

    // filter people based on the search value
    _.forEach(this.personList, (person) => {
      if (
        this.wordContains(person.firstName, searchValue) ||
        this.wordContains(person.lastName, searchValue) ||
        this.wordContains(person.city, searchValue) ||
        this.wordContains(person.phoneNumber, searchValue) ||
        this.wordContains(person.birthDate, searchValue)
      )
        this.displayPersonList.push(person);
    });
  }

  wordContains(word: String, keyValue: String): boolean {
    if (_.includes(word.toLowerCase(), keyValue.toLowerCase())) {
      return true;
    }
    return false;
  }

  deletePerson(id: number) {
    _.remove(this.personList, (p) => {
      return p.id == id;
    });

    this.displayPersonList = _.cloneDeep(this.personList);
  }
}
