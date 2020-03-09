import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  /*  using @Input() decorator to enable parent Component (AppComponent) to pass 
      value (a Course object) to child Component (Course-Card Component) variable course.
   */
  @Input() course : Course;

  constructor() { }

  ngOnInit(): void {
  }

}
