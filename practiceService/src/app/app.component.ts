import { Component, OnInit } from '@angular/core';
import {AccountService} from '../app/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})

export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService){

  }

  ngOnInit(){
    this.accounts =this.accountService.accounts;
  }

  /*accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];*/


}
