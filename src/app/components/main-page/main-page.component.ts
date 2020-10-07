import { Component, OnInit, ViewChild } from '@angular/core';

import messages from '../../util/constants/messages.json';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  messages = messages;

  loading = true;

  firstName = '';
  lastName = '';
  age: number;
  height = '';
  gender = 'M';
  nationality = '';

  submitted = false;

  resultUrl = '';

  @ViewChild("f") vadimForm: NgForm;

  nationalities = [
    {
      label: 'Hungarian',
      value: 'Hungarian'
    }, {
      label: 'Romanian',
      value: 'Romanian'
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.loading = false;
  }

  onSubmit(form: NgForm): void {
    this.firstName = form.value.firstName;
    this.lastName = form.value.lastName;
    this.age = form.value.age;
    this.height = form.value.height;
    this.nationality = form.value.nationality;
    this.gender = form.value.gender;

    if (!this.submitted) {
      this.resultUrl = this.computeOption();
      this.submitted = true;
    }
    else {
      this.submitted = false;
      this.resetForm();
    }
  }

  private computeOption() {
    var option = 0;

    if (this.nationality === 'Romanian') {
      if (this.gender === 'M') {
        let options = [2, 4, 5, 6, 14, 19];
        option = this.getRandom(options);
        if (Number(this.height) <= 165) {
          options = [3, 7, 18];
          option = this.getRandom(options);
        }
      } else if (this.gender === 'F') {
        let options = [8, 10, 11, 14];
        option = this.getRandom(options);
        if (Number(this.height) <= 140) {
          options = [12, 18];
          option = this.getRandom(options);
        }
      }
    }

    if (this.nationality === 'Hungarian') {
      if (this.gender === 'M') {
        let options = [13, 14, 16, 17, 19];
        option = this.getRandom(options);
        if (Number(this.height) <= 165) {
          options = [15, 17];
          option = this.getRandom(options);
        }
      } else if (this.gender === 'F') {
        const options = [14, 16, 17];
        option = this.getRandom(options);
      }
    }

    if (this.firstName === 'Mihai') {
      option = 1;
    }

    return `../../../assets/opinions/vadim_${option}.png`;
  }

  private getRandom(options): number {
    return options[Math.floor(Math.random() * options.length)];
  }

  private resetForm(): void {
    this.vadimForm.resetForm();
    this.gender = 'M';
  }
}
