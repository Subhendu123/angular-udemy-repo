import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() incremented : number;

  constructor() { }

  ngOnInit(): void {
  }

}
