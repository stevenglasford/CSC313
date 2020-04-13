import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cFirstName: string;
  cLastName: string;
  cPhone: number;

  constructor(private cntService: ContactService) { }

  ngOnInit(): void {
  }

  addNewContact(){
    const newContact: Contact = {
      firstName: this.cFirstName,
      lastName: this.cLastName,
      phone: this.cPhone
    }
    //add the contact and submit the data to the console for debugging
    this.cntService.addContact(newContact).subscribe(data => {
      console.log(data);
    })
  }

}
