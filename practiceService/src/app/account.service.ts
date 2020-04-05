import { Injectable, EventEmitter } from "@angular/core";
import {LoggingService} from './logging.service';

@Injectable()
export class AccountService{
    statusUpdated = new EventEmitter<string>();
    constructor(private logService: LoggingService){
        
    }

    accounts = [
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
      ];

      addAccount(name: string, status: string){
          this.accounts.push({name,status});
          this.logService.loggingStatusChange(status);
      }

      updateStatus(id: number, newStatus: string){
          this.accounts[id].status = newStatus;
          this.logService.loggingStatusChange(newStatus);
      }
}