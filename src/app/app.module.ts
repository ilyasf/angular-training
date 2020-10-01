import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoreComponentsModule } from './core-components/core-components.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
