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
    this.updateEditCache();
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
}
