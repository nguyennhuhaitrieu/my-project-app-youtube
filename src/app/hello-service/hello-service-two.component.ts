import { Component } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
  moduleId: module.id,
  selector: 'hello-service-two',
  template: `
    <button type="button" class="btn btn-danger" (click)="print('HelloTwoComponent')">
      HelloTwoComponent
    </button>
  `,
})
export class HelloServiceTwoComponent {
  constructor(private logService: LogService) {}

  print(content: string) {
    this.logService.print(content);
  }
}
