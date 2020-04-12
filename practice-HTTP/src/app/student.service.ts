import { Injectable } from '@angular/core';
import {Student} from './student';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(newStd: Student){
    return this.http.post('https://studentdata-5330a.firebaseio.com/' + 'student.json', newStd);
  }

  getStudents(){
    return this.http.get<Student[]>('https://studentdata-5330a.firebaseio.com/' + 'student.json')
    .pipe(map(responseData => {
      const studentArray: Student[] = [];
      for(const key in responseData){
        studentArray.push(responseData[key]);
      }
      return studentArray;
    }))
  }

  clearData(){
    return this.http.delete('https://studentdata-5330a.firebaseio.com/' + 'student.json');
  }
}
