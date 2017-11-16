import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './life-cycle/main.component';
import { AllComponent } from './life-cycle/all.component';
import { OneComponent } from './life-cycle/one.component';
import { TwoComponent } from './life-cycle/two.component';
import { NgContentMainComponent } from './ng-content/ng-content-main.component';
import { NgContentChildOneComponent } from './ng-content/ng-content-child-one.component';
import { NgContentChildTwoComponent } from './ng-content/ng-content-child-two.component';
import { HelloServiceOneComponent } from './hello-service/hello-service-one.component';
import { HelloServiceTwoComponent } from './hello-service/hello-service-two.component';
import { LogService } from './services/log.service';

import { CourseComponent } from './course-services/course.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllComponent,
    OneComponent,
    TwoComponent,
    NgContentMainComponent,
    NgContentChildOneComponent,
    NgContentChildTwoComponent,
    HelloServiceOneComponent,
    HelloServiceOneComponent,
    HelloServiceTwoComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
