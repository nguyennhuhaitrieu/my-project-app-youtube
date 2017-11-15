import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-study-ng-content-main',
	template: `
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Study Ng Content</h3>
      </div>
      <div class="panel-body">
        <zvn-study-ng-content-child-one>
          <div class="form-login">
            <div class="username">
              <label>Username</label>
              <input type="text" name="username"/>
            </div>
            <div class="passworld">
              <label>Passworld</label>
              <input type="text" name="passworld"/>
            </div>
            <div class="maninNumber">
              <p>MainNumber:  {{ maninNumber }}</p>
              <p>ChildNumber: {{ childNumber }}</p>
            </div>
          </div>
        </zvn-study-ng-content-child-one>
        <zvn-study-ng-content-child-two>
          <div class="abc-def">
            Class: .abc-def
          </div>
          <h3>H3 Elements</h3>
          <div my-attribute>Attribute</div>
          <div my-attribute2="angular">Attribute width value</div>
          <div item item-active>Many Attribute</div>
        </zvn-study-ng-content-child-two>
      </div>
      <div class="panel-footer">
      </div>
    <div>
	`
})

export class NgContentMainComponent {
	maninNumber: number = 100;
}
