import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';



const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
