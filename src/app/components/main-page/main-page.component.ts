import {Component, OnInit} from '@angular/core';

import messages from '../../util/constants/messages.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public messages = messages;

  public loading = true;

  public firstName = '';
  public lastName = '';
  public age: number;
  public height = '';
  public gender = 'M';
  public nationality = '';

  public errors = false;

  private option = 0;

  public nationalities = [{
    label: 'Hungarian',
    value: 'Hungarian'
  }, {
    label: 'Romanian',
    value: 'Romanian'
  }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loading = false;
  }

  public onSubmit(): void {
    if (
      this.firstName
      && this.lastName
      && this.age
      && this.height
      && this.gender
      && this.nationality
    ) {
      if (this.nationality === 'Romanian') {
        if (this.gender === 'M') {
          let options = [2, 4, 5, 6, 14, 19];
          this.option = this.getRandom(options);
          if (Number(this.height) <= 165) {
            options = [3, 7, 18];
            this.option = this.getRandom(options);
          }
        } else if (this.gender === 'F') {
          let options = [8, 10, 11, 14];
          this.option = this.getRandom(options);
          if (Number(this.height) <= 140) {
            options = [12, 18];
            this.option = this.getRandom(options);
          }
        }
      }

      if (this.nationality === 'Hungarian') {
        if (this.gender === 'M') {
          let options = [13, 14, 16, 17, 19];
          this.option = this.getRandom(options);
          if (Number(this.height) <= 165) {
            options = [15, 17];
            this.option = this.getRandom(options);
          }
        } else if (this.gender === 'F') {
          const options = [14, 16, 17];
          this.option = this.getRandom(options);
        }
      }

      if (this.firstName === 'Mihai') {
        this.option = 1;
      }
      this.router.navigate(['/opinion'], {
        queryParams: {
          firstName: this.firstName,
          lastName: this.lastName,
          option: this.option
        }
      });
    } else {
      this.errors = true;
    }
  }

  private getRandom(options): number {
    return options[Math.floor(Math.random() * options.length)];
  }
}
