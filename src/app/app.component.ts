import { Component } from '@angular/core';
import {collegueMock} from './mock/collegues.mock';
import {matriculeMock} from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  collegueExemple = collegueMock;
  matriculeExemple = matriculeMock;
  }
