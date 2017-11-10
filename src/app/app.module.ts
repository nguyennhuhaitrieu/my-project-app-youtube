import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './life-cycle/main.component';
import { AllComponent } from './life-cycle/all.component';
import { OneComponent } from './life-cycle/one.component';
import { TwoComponent } from './life-cycle/two.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AllComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
