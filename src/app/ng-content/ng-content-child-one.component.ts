import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-study-ng-content-child-one',
	template: `
    <div class="content">
      zvn-ngcontent-child-one
      <ng-content></ng-content>
    </div>
	`
})

export class NgContentChildOneComponent {
  childNumber: number = 200;
}
