import { Component, OnInit } from '@angular/core';
import { ScopedService } from '../scoped.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css'],
  providers: [ScopedService],
})
export class C3Component implements OnInit {
  constructor(public scoped: ScopedService) {}

  ngOnInit(): void {}
}
