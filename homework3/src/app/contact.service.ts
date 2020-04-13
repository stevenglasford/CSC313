import { Injectable } from '@angular/core';
import {Contact} from './contact';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    constructor(private http: HttpClient){}

    addContact(newCnt: Contact){
        return this.http.post('https://studentdata-5330a.firebaseio.com/homework3/'+
        'contact.json', newCnt);
        console.log(newCnt);
    }

    getContacts(){
        return this.http.get<Contact[]>('https://studentdata-5330a.firebaseio.com/homework3/' + 
        'contact.json')
        .pipe(map(responseData => {
            const contactArray: Contact[] = [];
            for(const key in responseData){
                contactArray.push(responseData[key]);
            }
            return contactArray;
        }))
    }

    deleteContact(delCnt: Contact){

    }
}