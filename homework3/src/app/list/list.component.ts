import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {ListContact} from '../listContact';
import {Contact} from '../contact';
import {HttpClient} from '@angular/common/http';


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
    id: ''
  };
  cFirstName: string;
  cLastName: string;
  cPhone: number;
  cId: string;

  keys: string[] = [];
  tContact: ListContact;

  constructor(
    private cntService: ContactService,
    private http: HttpClient
  ) { }

  ngOnInit(){
    this.fetchData();
  }

  updateContact(oldContact: ListContact,
                oldId: string, 
                oldFirstName: string, 
                oldLastName: string,
                oldPhone: number){
    //this.delete(oldContact);
    //if the following data points are not set then 
    //set them to old values contained in the oldContact
    //create a new contact

    const newContact: Contact = {
      firstName: this.cFirstName,
      lastName: this.cLastName,
      phone: this.cPhone,
    }
    //add the contact and submit the data to the console for debugging
    this.cntService.addContact(newContact).subscribe(data => {
      console.log(data);
    })
    this.delete(oldContact);
    //get rid of that shitty old contact


  }

  delete(contact: ListContact){
    //add the contact and submit the data to the console for debugging
    this.cntService.deleteContact(contact).subscribe(data => {
      this.fetchData();
    })
  }

  fetchData(){
    this.cntService.getContacts().subscribe(data => {
      this.contacts = data.contactArray;
      this.keys = data.keyArray;
      let i: number = 0;
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
