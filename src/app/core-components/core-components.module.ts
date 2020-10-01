import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, FakeLogoComponent, BreadcrumbsComponent, SearchBarComponent, CoursesListComponent, CoursesListItemComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class CoreComponentsModule { }
