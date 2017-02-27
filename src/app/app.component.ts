import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getTodos, addTodo, ADD_TODO_SUCCESS } from "./app.module";
import { TodosEffects } from "./todos.effects";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Observable<any>;
  addTodoSuccess$ : Observable<any>;

  constructor( private store : Store<any>, private todosEffects : TodosEffects ) {
    this.store.dispatch(getTodos());
    this.todos = store.select("todos");
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( {type} ) => type === ADD_TODO_SUCCESS);
  }

  addTodo( todo ) {
    this.store.dispatch(addTodo(todo));
  }
}
