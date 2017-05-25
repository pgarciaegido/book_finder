import { Injectable } from '@angular/core';

@Injectable()
export class ComponentComunicatorService {

    questionnaire:string[] = [];

    constructor() {}

    questionnaireSetter(arr:string[]){
        this.questionnaire = arr;
    }

    questionnaireGetter(){
        return this.questionnaire ? this.questionnaire : 'Not done!!!';
    }
}