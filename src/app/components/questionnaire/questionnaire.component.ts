import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
    current: number;
    questions;
    button: string;
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
        this.button = 'Next question';
    }

    nextQuestion() {
        console.log(this.results);
        if (this.current === this.questions.length - 2) {
            this.button = 'Get results!';
        }
        else if (this.current === this.questions.length - 1) {
            return;
        }
        console.log('passing.....')
        this.current += 1;

    }
}
