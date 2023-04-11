import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;
  public mode: String = 'list';

/**
   * ctor > tab
   */
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.required
      ])]
    })

    this.load();
  }

  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false))

    this.save();
    this.formClear();
    this.changeMode('list');
  }

  formClear(){
    this.form.reset();
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);

    if(index !== -1){
      this.todos.splice(index, 1);
    }

    this.save();
  }

  markAsDone(todo: Todo){
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo){
    todo.done = false;
    this.save();
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load(){
    const data = localStorage.getItem('todos');
    if(data) this.todos = JSON.parse(data);
  }

  changeMode(mode:string){
    this.mode = mode;
  }
}
