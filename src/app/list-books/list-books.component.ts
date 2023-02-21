import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books : Book[];
  action = "";
  lastId : number;

  constructor() { }

  changeAction(action :string){
    this.action = action;
    if(action == 'add')
      this.lastId = this.books[this.books.length - 1].id;
  }

  addBook(book : Book){
    this.books.push(book);
    this.changeAction('');
  }

  ngOnInit(): void {
    this.books = [
      new Book(1, "The slight edge", "Jeff Olsen", 40),
      new Book(2, "Power of habits", "Charles Duhigg", 30),
      new Book(3, "The one thing", "Gary W. Keller", 20)
    ]
  }

}
