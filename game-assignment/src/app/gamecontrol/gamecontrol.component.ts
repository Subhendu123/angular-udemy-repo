import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { } from '../translation'

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  index : number = 0;

  @Output() incremented = new EventEmitter<{}> ();

  constructor() { }

  ngOnInit(): void {
  }
  createdInterval : any;

   start() {
    this.createdInterval = setInterval( () => {
      this.index++;
      this.incremented.emit({'isEven' : this.index % 2 == 0 , 'index' : this.index});
    },1000)
  }

  stop() {
    clearInterval(this.createdInterval);
  }
}
