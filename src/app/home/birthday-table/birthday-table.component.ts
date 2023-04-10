import { Component } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-birthday-table',
  templateUrl: './birthday-table.component.html',
  styleUrls: ['./birthday-table.component.scss']
})
export class BirthdayTableComponent {
  personList: Person[] = [];

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void{
    this.personList = this.peopleService.people;
  }

}
