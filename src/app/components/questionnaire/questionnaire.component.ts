import { Component, Output, EventEmitter } from '@angular/core';

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

    constructor() {
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
        this.questionnaireDone.emit(true);
        console.log(this.results)
    }
}
