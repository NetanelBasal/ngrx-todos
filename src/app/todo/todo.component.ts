import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `<p (click)="toggle.next(todo)">
                 {{todo.title}}
                </p>`,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo;
  @Output() toggle = new EventEmitter<any>();
}
