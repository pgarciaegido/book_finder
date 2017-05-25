import { Component } from '@angular/core';
import { ComponentComunicatorService } from '../../services/componentComunicator.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  results;

  constructor(private componentComunicatorService: ComponentComunicatorService ){
    this.results = componentComunicatorService.questionnaireGetter();
    console.log(this.results);
   }

}
