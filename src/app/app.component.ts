import { Component }          from '@angular/core';
//Inicio de Decorador
@Component({
  //Inicio de Metadata
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
//Fin decorador

//Definición de la clase
export class AppComponent {
  title = 'Tour of Heroes';
}
