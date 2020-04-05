import { Component, EventEmitter, Output, Injectable } from '@angular/core';
/*import {LoggingService} from '../logging.service';*/
import { AccountService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(/*private logService: LoggingService,*/
              private accountService: AccountService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.logService.loggingStatusChange(accountStatus);*/
    //console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status' + status)
    );
  }
}
