import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule }     from './app-routing.module';




//used to route between the the two pages, the list contacts page and the add-contacts
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './add/list.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule ],
  declarations: [ 
    AppComponent,  
    AddContactsComponent, 
    ListContactsComponent, AddComponent ],
  bootstrap:    [ 
    AppComponent ]
})
export class AppModule { }
