import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
// publica      tipo: qualquer coisa kk (array pq [])
//       nome da var    vazio (podia terminar em any[] mas dai a info seria undefined, e no caso, quero vazio)
  public title: String = 'meus afazeres:';

/**
   * ctor > tab
   */
  constructor() {
    this.todos.push('brincar de boneca');
    this.todos.push('comprar abacate');
    this.todos.push('tropeçar no meio da rua');
  }

  alteraTitulo(){
    this.title = 'meus o que fazer:';
  }
}
