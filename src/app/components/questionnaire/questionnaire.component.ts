import { Component, Output, EventEmitter } from '@angular/core';
import { ComponentComunicatorService } from '../../services/componentComunicator.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
    current: number;
    questions;
    lastQuestion = false;
    results: string[] = [];

    constructor(private componentComunicatorService: ComponentComunicatorService) {
        this.current = 0;
        this.questions = [
            {
                title: 'What\'s your favourite genre',
                answers: ['Filosophy', 'History', 'Novel']
            },
            {
                title: 'Do you prefer classics, or new books?',
                answers: ['Classics', 'New Books']
            }
        ];
    }

    // tslint:disable-next-line:member-ordering
    @Output() questionnaireDone = new EventEmitter<boolean>();

    nextQuestion() {
        console.log(this.results);
        if (this.current === this.questions.length - 2) {
            this.lastQuestion = true;
        }
        this.current += 1;
    }

    endQuestionnaire() {
        this.componentComunicatorService.questionnaireSetter(this.results);
        this.questionnaireDone.emit(true);
    }
}
