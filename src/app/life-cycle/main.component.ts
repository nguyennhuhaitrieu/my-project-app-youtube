import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-lifecycle',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">LifeCycleHook</h3>
			</div>
      <div class="panel-body">
        <zvn-lifecycle-two
          [value1] = "value1"
          [value2] = "value2"
        >
        </zvn-lifecycle-two>
      </div>

      <div class="panel-footer">
        <!--<button (click)="show = false" type="button" class="btn btn-success">Destroy</button> -->
        <button (click)="value1 = '456' " type="button" class="btn btn-info">Change value 1 </button>
        <button (click)="value1 = '234' ; value2 ='456' " type="button" class="btn btn-danger">Change value1 & 2</button>
      </div>
		</div>
	`
})

export class MainComponent   {
  show:boolean = true;
  value1: string = "123";
  value2: string = "def";
	constructor() {
	}
}
