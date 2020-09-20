import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import messages from '../../util/constants/messages.json';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  public messages = messages;

  public firstName = '';
  public lastName = '';
  public photoUrl = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.photoUrl = `../../../assets/opinions/vadim_${params['option']}.png`;
    });
  }

  public onBack(): void {
    this.router.navigate(['/']);
  }

}
