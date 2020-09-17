import { Component, OnInit } from '@angular/core';

import messages from '../../util/constants/messages.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public messages = messages;

  public firstName: string;
  public lastName: string;
  public age: number;
  public height: string;
  public gender: string;
  public nationality: string;
  public occupation: string;
  public politicInterested: boolean;

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {

  }
}
