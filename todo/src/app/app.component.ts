import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
// publica      tipo: qualquer coisa kk (array pq [])
//       nome da var    vazio (podia terminar em any[] mas dai a info seria undefined, e no caso, quero vazio)
  public title: String = 'meus afazeres:';

/**
   * ctor > tab
   */
  constructor() {
    this.todos.push(new Todo(1, 'fazer carinho no gatinho', false));
    this.todos.push(new Todo(2, 'quebrar um cabinho (tem que ser com alicate)', false));
    this.todos.push(new Todo(3, 'morrer atropelado', false));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);

    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
