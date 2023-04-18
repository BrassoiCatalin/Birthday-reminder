import { Injectable } from '@angular/core';
import peopleData from './people.json';
import { Person } from '../interfaces/person.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  resetAllFilters() {
    throw new Error('Method not implemented.');
  }

  //  moviesListSubject: Subject<Movie[]> = new Subject<Movie[]>();
  private personList: Person[] = peopleData;
  personListSubject: Subject<Person[]> = new Subject<Person[]>();

  constructor() { }

  get people(){
    return this.personList;
  }

  set people(people: Person[]){
    this.personList = people;
  }

  sortByFirstNameAscending(){
    this.personList.sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByFirstNameDescending(){
    this.personList.sort((a, b) =>
      a.firstName < b.firstName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByLastNameAscending(){
    this.personList.sort((a, b) =>
      a.lastName > b.lastName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByLastNameDescending(){
    this.personList.sort((a, b) =>
      a.lastName < b.lastName ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByPhoneNumberAscending(){
    this.personList.sort((a, b) =>
      a.phoneNumber > b.phoneNumber ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByPhoneNumberDescending(){
    this.personList.sort((a, b) =>
      a.phoneNumber < b.phoneNumber ? 1 : -1);
    this.personListSubject.next(this.personList);
  }

  sortByCityAscending(){
    this.personList.sort((a, b) =>
      a.city > b.city ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
  sortByCityDescending(){
    this.personList.sort((a, b) =>
      a.city < b.city ? 1 : -1);
    this.personListSubject.next(this.personList);
  }
}
