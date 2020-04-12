import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListComponent} from './list/list.component';

import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: '', redirectTo: '/add', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }