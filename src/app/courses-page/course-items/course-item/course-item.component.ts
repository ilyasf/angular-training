import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../../../interfaces/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() item: ICourse;
  @Output() onDeleteCourse = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleEdit(id: string): void {
    console.log(`Edit course ${id}`);
  }

  public handleDelete(id: string): void {
    this.onDeleteCourse.emit(id);
  }
}
