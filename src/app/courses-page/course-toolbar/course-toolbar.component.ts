import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-toolbar',
  templateUrl: './course-toolbar.component.html',
  styleUrls: ['./course-toolbar.component.scss']
})
export class CourseToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handleAddNewCourse(): void {
    console.log('Add new course!');
  }

}
