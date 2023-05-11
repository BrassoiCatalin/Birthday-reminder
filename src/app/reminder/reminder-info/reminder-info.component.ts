import { Person } from './../../home/interfaces/person.interface';
import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-reminder-info',
  templateUrl: './reminder-info.component.html',
  styleUrls: ['./reminder-info.component.scss'],
})
export class ReminderInfoComponent {
  currentDateNoYear?: string;
  modalVisibility = false;
  errorModalVisibility = false;
  nextPerson: Person = {} as Person;
  @Input() set listOfBirthdays(value: Person[]) {
    this.localBirthdays = _.cloneDeep(value);
  }
  localBirthdays!: Person[];
  resultToShow?: Person;

  constructor(private datePipe: DatePipe) {}

  loadNextBirthday() {
    let today = new Date();
    let currentDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    let currentYear = currentDate!.substring(0, 4);

    const dict: { [id: number]: number } = {};

    let hasPositives = false;

    _.forEach(this.localBirthdays, (b) => {
      let birthDate = this.datePipe.transform(b.birthDate, 'yyyy-MM-dd');

      birthDate = birthDate!.slice(4);

      birthDate = currentYear + birthDate;

      let diff = new Date(birthDate).valueOf() - new Date().valueOf();

      if (diff >= 0) {
        hasPositives = true;
      }

      dict[b.id] = diff;
    });

    let id: string;
    let value;

    if (this.localBirthdays.length > 0) {
      if (hasPositives) {
        value = new Date().valueOf();
        for (let key in dict) {
          if (dict[key] > 0) {
            if (dict[key] <= value) {
              id = key;
              value = dict[key];
            }
          }
        }
      } else {
        value = 0;
        for (let key in dict) {
          if (dict[key] <= value) {
            id = key;
            value = dict[key];
          }
        }
      }
      const index = this.localBirthdays.findIndex(
        (item) => item.id == Number(id)
      );

      this.nextPerson = this.localBirthdays[index];
    }
  }

  handleOk() {
    this.modalVisibility = false;
  }

  handleClose() {
    this.modalVisibility = false;
  }

  handleErrorOk() {
    this.errorModalVisibility = false;
  }

  handleErrorClose() {
    this.errorModalVisibility = false;
  }

  showModal() {
    if (this.localBirthdays.length > 0) {
      this.modalVisibility = true;
      this.loadNextBirthday();
    } else {
      this.errorModalVisibility = true;
    }
  }
}
