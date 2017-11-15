import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  lastContent: string;

  constructor() {
  }

  print(content: string) {
    console.log("Current:____" + content);
    console.log("Last Curent:____" +this.lastContent);

    this.lastContent= content;
  }
}
