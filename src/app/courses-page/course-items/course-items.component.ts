import { Component, OnInit } from '@angular/core';
import {ICourse} from '../../interfaces/course';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss']
})
export class CourseItemsComponent implements OnInit {
  courses: ICourse[] = [];
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {id: 'course-1', duration: 68, createdAt: '08/28/2020', title: 'Video Course 1. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.'},
      {id: 'course-2', duration: 78, createdAt: '10/28/2020', title: 'Video Course 2. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.'},
      {id: 'course-3', duration: 98, createdAt: '11/28/2020', title: 'Video Course 3. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.'},
      {id: 'course-4', duration: 58, createdAt: '07/28/2020', title: 'Video Course 4. Name tag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper enim maximus lorem cursus, sed dignissim dolor elementum. Pellentesque iaculis justo est, id tincidunt elit vestibulum nec. Nullam laoreet eu lorem ut viverra. Sed eget rutrum metus. Donec sed quam vel nisi faucibus porta ut ut lorem. Proin vestibulum mauris nec turpis placerat eleifend. Quisque consectetur dignissim libero ut ullamcorper.'},
    ];
  }

  public onDeleteCourse(courseId: string): void {
    console.log('onDelete in parent ', courseId);
    this.courses = this.courses.filter(item => item.id !== courseId);
  }

}
