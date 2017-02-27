import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TodosService } from "./todos.service";
import { EffectsModule } from "@ngrx/effects";
import { TodosEffects } from "./todos.effects";
import { AddTodoComponent } from './add-todo/add-todo.component';

export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR= "ADD_TODO_ERROR";

export function getTodos() {
  return {
    type: GET_TODOS
  }
}

export function addTodo( title ) {
  return {
    type: ADD_TODO,
    payload: {
      id: Math.random(),
      title,
      completed: false,
    }
  }
}

const initialState = {
  data: [],
  pending: false,
  error: null
}

function todos( state = initialState, {type, payload} ) {
  switch( type ) {
    case GET_TODOS:
      return Object.assign({}, state, {pending: true, error: null})
    case GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false})
    case GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"})
    case ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, payload]
      });
    default:
      return state;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({todos}),
    EffectsModule.run(TodosEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
