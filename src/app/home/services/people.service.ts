import { Injectable } from '@angular/core';
import peopleData from './people.json';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private personList: Person[] = peopleData;

  constructor() { }

  get people(){
    return this.personList;
  }

  set people(people: Person[]){
    this.personList = people;
  }
}
