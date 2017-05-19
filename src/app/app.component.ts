import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  qDone = false;

  questionnaireDone(done: boolean) {
    this.qDone = done;
  }
}
