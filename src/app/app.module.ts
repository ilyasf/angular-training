import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoreComponentsModule } from './core-components/core-components.module';
import { CourseHeaderComponent } from './courses-page/course-header/course-header.component';
import { CourseFilterComponent } from './courses-page/course-filter/course-filter.component';
import { CourseItemsComponent } from './courses-page/course-items/course-items.component';
import { CourseItemComponent } from './courses-page/course-items/course-item/course-item.component';
import { CourseToolbarComponent } from './courses-page/course-toolbar/course-toolbar.component';
import {FormsModule} from '@angular/forms';
import { CourseFooterComponent } from './courses-page/course-footer/course-footer.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '', component: CoursesPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent,
    CourseHeaderComponent,
    CourseFilterComponent,
    CourseItemsComponent,
    CourseItemComponent,
    CourseToolbarComponent,
    CourseFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    CoreComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
