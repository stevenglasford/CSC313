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
    phone: '', 
    id: ''
  };
  cFirstName: string;
  cLastName: string;
  cPhone: string;
  cId: string;

  buttonName = 'Show Edit';

  public selectedContact: string = null;

  keys: string[] = [];
  tContact: ListContact;

  constructor(
    private cntService: ContactService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  updateContact(oldContact: ListContact, index: number){

    const newContact: Contact = {
      firstName: this.cFirstName,
      lastName: this.cLastName,
      phone: this.cPhone,
    }
    //add the contact and submit the data to the console for debugging
    this.cntService.addContact(newContact).subscribe(data => {
      console.log(data);
    })
    this.delete(oldContact.id, index);
    //get rid of that shitty old contact


  }

  delete(contact: string, index: number){
    //add the contact and submit the data to the console for debugging
    this.cntService.deleteContact(contact).subscribe(() => {
      //reload the page and get all of the data on reload
      this.listContacts.splice(index);
      this.fetchData();
    })
    
  }

  fetchData(){
    this.cntService.getContacts().subscribe(data => {
      //reset the array of contacts if the list is reloaded or the 
      //database is changed
      let i: number = 0;
      this.contacts = data.contactArray;
      this.keys = data.keyArray;
      
      i=0;
      while(i < this.contacts.length){
        const newContact: ListContact = {
          firstName: data.contactArray[i].firstName,
          lastName: data.contactArray[i].lastName,
          phone: data.contactArray[i].phone,
          id: data.keyArray[i],
        }
        this.listContacts.push(newContact);
        i++;
      }
    }) 
  }
}
