import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {ListContact} from '../listContact';
import {Contact} from '../contact';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  contacts: Contact[] = [];
  listContacts: ListContact[] = [];
  tempContact: ListContact = {
    firstName: '', 
    lastName: '', 
    phone: 0, 
    id: ''};
  keys: string[] = [];

  constructor(private cntService: ContactService) { }

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.cntService.getContacts().subscribe(data => {
      this.contacts = data.contactArray;
      this.keys = data.keyArray;
      let i: number = 0;
      while(i < this.contacts.length){
        this.tempContact.phone = this.contacts[i].phone;
        this.tempContact.firstName = this.contacts[i].firstName;
        this.tempContact.lastName = this.contacts[i].lastName;
        this.tempContact.id = this.keys[i];
        this.listContacts.push(this.tempContact);
        i++;
      }
      
    }) 
  }
}
