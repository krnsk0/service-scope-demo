import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private count = 0;

  constructor() {}

  increment(): void {
    this.count += 1;
  }

  getCount(): number {
    return this.count;
  }
}
