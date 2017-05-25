import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { ResultsComponent } from './components/results/results.component';

import { ComponentComunicatorService } from './services/componentComunicator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionnaireComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  
  ],
  providers: [
    ComponentComunicatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
