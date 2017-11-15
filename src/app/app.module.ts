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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllComponent,
    OneComponent,
    TwoComponent,
    NgContentMainComponent,
    NgContentChildOneComponent,
    NgContentChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
