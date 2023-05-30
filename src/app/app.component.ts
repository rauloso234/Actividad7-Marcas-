import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agenda';
  corrovoracion: {
    estadoMenu: boolean;
  };
  

  constructor() {
    this.corrovoracion = { estadoMenu: false };
  }
}
