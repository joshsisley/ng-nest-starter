import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [TodoListComponent, TodoComponent],
  imports: [CommonModule, TodosRoutingModule]
})
export class TodosModule {}
