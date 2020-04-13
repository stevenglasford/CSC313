import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
  contacts: Contact[] = [];

  constructor(private cntService: ContactService) { }

  ngOnInit(){
    this.fetchData();
  }

  fetchData(){
    this.cntService.getContacts().subscribe(data => {
      this.contacts = data;
    })
  }
}
