import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-study-ng-content-child-two',
	template: `
    <div class="content">
      zvn-ngcontent-child-two
      <ng-content></ng-content>
      <div class="alert alert-danger">
        <ng-content select=".abc-def"></ng-content>
      </div>
      <div class="alert alert-success">
        <ng-content select="h3"></ng-content>
      </div>

      <div class="alert alert-info">
        <ng-content select="[my-attribute]"></ng-content>
      </div>

      <div class="alert alert-info">
      <ng-content select="[my-attribute2=angular]"></ng-content>
      </div>

      <div class="alert alert-info">
        <ng-content select="[item][item-active]"></ng-content>
      </div>
    </div>
	`
})

export class NgContentChildTwoComponent {
  childNumber: number = 200;
}
