import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // //creating variables that will be passed to the child Component
  // csci160 = COURSES[0];
  // csci161 = COURSES[1];
  // csci213 = COURSES[2];
  courseList: Course[] = COURSES;


}
