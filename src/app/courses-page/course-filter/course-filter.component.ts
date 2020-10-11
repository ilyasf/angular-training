import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.scss']
})
export class CourseFilterComponent implements OnInit {
  public searchText = '';

  constructor() { }

  ngOnInit(): void {
    this.searchText = '';
  }

  public handleSearch(): void {
    console.log(`Search value is: ${this.searchText}`);
  }
}
