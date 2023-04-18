import { Injectable } from '@angular/core';
import peopleData from './people.json';
import { Person } from '../interfaces/person.interface';
import { Subject } from 'rxjs';
import _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private personList: Person[] = peopleData;
  personListSubject: Subject<Person[]> = new Subject<Person[]>();

  constructor() {}

  get people() {
    return this.personList;
  }

  set people(people: Person[]) {
    this.personList = people;
  }

  sortByFirstNameAscending(){
    this.personList.sort((a, b) =>a.firstName > b.firstName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByFirstNameDescending(){
    this.personList.sort((a, b) =>a.firstName < b.firstName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByLastNameAscending(){
    this.personList.sort((a, b) =>a.lastName > b.lastName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByLastNameDescending(){
    this.personList.sort((a, b) =>a.lastName < b.lastName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByPhoneNumberAscending(){
    this.personList.sort((a, b) =>a.phoneNumber > b.phoneNumber ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByPhoneNumberDescending(){
    this.personList.sort((a, b) =>a.phoneNumber < b.phoneNumber ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByCityAscending(){
    this.personList.sort((a, b) =>a.city > b.city ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByCityDescending(){
    this.personList.sort((a, b) =>a.city < b.city ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByBirthDayAscending(){
    this.personList.sort((a, b) => a.birthDate > b.birthDate ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  addPerson(person: Person) {
    let max = _.maxBy(this.personList, 'id')!.id;
    let newPerson: Person = {
      id: max + 1,
      firstName: person.firstName,
      lastName: person.lastName,
      phoneNumber: "07",
      city: person.city,
      birthDate: person.birthDate,
      wishList: person.wishList,
    };
    this.personList.push(person);
    }
}
