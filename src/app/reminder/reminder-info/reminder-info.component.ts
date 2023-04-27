import { Person } from './../../home/interfaces/person.interface';
import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-reminder-info',
  templateUrl: './reminder-info.component.html',
  styleUrls: ['./reminder-info.component.scss']
})
export class ReminderInfoComponent {
  currentDate?: string | null;
  currentDateNoYear?: string;
  @Input() set listOfBirthdays(value: Person[]) {
    this.localBirthdays = cloneDeep(value);
  }
  localBirthdays!: Person[];
  resultToShow?: Person;
  seeResult: boolean = true;
  isButtonEnabled: boolean = false;
  month?: string;
  day?: string;

  constructor(private datePipe: DatePipe){
  }

  loadNextBirthday(): void{
    this.seeResult = false;
    this.isButtonEnabled = true;

    let today = new Date();
    this.currentDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    this.currentDateNoYear = this.currentDate?.substring(5)!;

    this.localBirthdays.forEach(element => {
      element.birthDate = element.birthDate.substring(5);
    });

    let dummyPerson: Person = {
      id: 0,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      birthDate: this.currentDateNoYear
    }

    this.localBirthdays.push(dummyPerson);
    this.localBirthdays.sort((a, b) => a.birthDate > b.birthDate ? 1 : -1);

    for(let index = 0; index < this.localBirthdays.length; index++){

      if(this.localBirthdays[index].birthDate === this.currentDateNoYear){
        this.resultToShow = this.localBirthdays[index + 1];
        break;
      }
    }

    this.month = this.resultToShow?.birthDate.substring(0, 2);
    this.day = this.resultToShow?.birthDate.substring(this.resultToShow?.birthDate.length - 2);
  }
}
