import { Component, OnInit } from '@angular/core';
import { ScopedService } from '../scoped.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers: [ScopedService],
})
export class C2Component implements OnInit {
  constructor(public scoped: ScopedService, public shared: SharedService) {}

  ngOnInit(): void {}
}
