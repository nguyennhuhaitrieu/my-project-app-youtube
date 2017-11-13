import { Component, OnInit, Input, DoCheck, SimpleChanges,SimpleChange } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-lifecycle-two',
  template: `
    <h3>{{ distance }}</h3>
    <ul class="list">
      <li *ngFor="let hook of hooks">
        {{ hook }}
      </li>
    </ul>
	`
})

export class TwoComponent implements OnInit, DoCheck {
  hooks: string[] = [];
  distance: number = 0 ;

  @Input('value1') value1: string;
  @Input('value2') value2: string;
  @Input('value3') value3: string = "a";

	constructor() {
    this.hooks.push("contructor");
  }

  ngOnChanges(simple: SimpleChanges) {
    console.log(simple);
    this.hooks.push("ngOnChanges");
    let tmpObj: SimpleChange = simple['value1'];
    if(!tmpObj.isFirstChange()) {
      this.distance = parseInt(tmpObj.currentValue) - parseInt(tmpObj.previousValue);
    }
  }

  ngOnInit () {
    this.hooks.push("ngOnInit");
  }

  ngDoCheck() {
    this.hooks.push("ngDoCheck");
  }
}
