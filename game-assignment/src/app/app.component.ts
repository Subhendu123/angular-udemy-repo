import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-assignment';
  receivedEvent : any;
  isIncremented(receivedEvent){
    this.receivedEvent = receivedEvent;
  }
}
