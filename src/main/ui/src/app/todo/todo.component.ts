import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:string
  todo: Todo
  user:string;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.user=sessionStorage.getItem('authenticatedUser');
    this.todo = new Todo(null,'',false,new Date());
    
    if(this.id!=null) {
      this.todoService.retrieveTodo(this.user, this.id)
          .subscribe (
            data => this.todo = data
          )
    }
  }

  saveTodo() {
    if(this.id == "-1") {
      this.todo.id=null;
      this.todoService.createTodo(this.user, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    } else {
      this.todoService.updateTodo(this.user, this.id, this.todo)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['todos'])
            }
          )
    }
  }

}