import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.scss']
})
export class CourseFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handleLoadMore(): void {
    console.log('Load more');
  }
}
