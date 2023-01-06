import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy{

todos: Todo[] = [];
storageListenSub: Subscription;


  constructor() {
    this.loadState()
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event : StorageEvent) => {
      if(event.key === 'Todos'){
        this.loadState()
      }
    })
   }

   ngOnDestroy(): void {
    if(this.storageListenSub) this.storageListenSub.unsubscribe()
   }

  getTodos(){
    return this.todos
  }

  getTodo(id: string){
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
    this.saveState()
  }

  updateTodo(id: string , updateTodoFields: Partial<Todo>){
    const todo = this.getTodo(id)
    Object.assign(todo , updateTodoFields)
    this.saveState()

  }

  deleteTodo(id:string){
    const index  = this.todos.findIndex(t=> t.id === id)

    if(index == -1) return
    this.todos.splice(index,1)
    this.saveState()

  }

  saveState(){
    localStorage.setItem("Todos" ,JSON.stringify( this.todos))
   }

   loadState(){
     try {
       const todosInStorage = JSON.parse(localStorage.getItem("Todos"))
       if(!todosInStorage) return
       this.todos.length = 0 //clear the notes array (while kepping the refrence)
       this.todos.push(...todosInStorage) //Merging two arrayd : This example uses spread syntax to push all elements from a second array into the first one.
     } catch (error) {
       console.log("خطاااااااااااااااا")
       console.log(error)
     }
   }
}
