import { Component } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
  moduleId: module.id,
  selector: 'hello-service-one',
  template: `
    <button type="button" class="btn btn-info" (click)="print('HelloOneComponent')">
      HelloOne Component
    </button>
  `,
})
export class HelloServiceOneComponent {

  constructor(private logService: LogService) {}

  print(content: string) {
    this.logService.print(content);
  }
}
