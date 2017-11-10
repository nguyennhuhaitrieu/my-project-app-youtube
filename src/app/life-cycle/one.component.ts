import { Component, OnInit,  OnDestroy } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-lifecycle-one',
	template: `
		<h3>OnInit , OnDestroy</h3>
	`
})

export class OneComponent implements OnInit, OnDestroy  {
	constructor() {
    console.log("contructor");
	}

  ngOnInit() {
    console.log("ngOneInit");
  }

	ngOnDestroy(){
		console.log("ngOnDestroy");
	}

}

