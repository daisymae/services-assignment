import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  inactiveCount = 0;
  activeCount = 0;

  constructor() { }

  addInactive() {
    this.inactiveCount++;
    console.log('# made inactive: ' + this.inactiveCount);
  }

  addActive() {
    this.activeCount++;
    console.log('# made active: ' + this.activeCount);
  }
}
