import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable()
export class ScopedService {
  private count = 0;

  constructor(public shared: SharedService) {}

  increment(): void {
    this.count += 1;
  }

  getCount(): number {
    return this.count;
  }
}
