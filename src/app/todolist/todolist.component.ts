import { Component, OnInit } from '@angular/core';
import { todo } from '../core/todo';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
ListTodo:todo[]=[] 
c!:number;
  constructor(private _calcul: CalculService) { }

  ngOnInit(): void {
    this.ListTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem",
      "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];
  }

  getBilan(){ 

  this.c=  this._calcul.getNumberOf(this.ListTodo,"completed", false); 

  }

}
