import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-lifecycle-two',
	template: `
    <ul class="list">
      <li *ngFor="let hook of hooks">
        {{ hook }}
      </li>
    </ul>
	`
})

export class TwoComponent implements OnInit, DoCheck {
  hooks: string[] = [];

  @Input('value1') value1: string;
  @Input('value2') value2: string;
  @Input('value3') value3: string = "a";

	constructor() {
    this.hooks.push("contructor");
  }

  ngOnInit () {
    this.hooks.push("ngOnInit");
  }

  ngDoCheck() {
    this.hooks.push("ngDoCheck");
  }
}
