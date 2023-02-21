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
  bookToEdit : Book;

  constructor() { }

  changeAction(action :string, book? : Book){
    this.action = action;
    if(action == 'add')
      this.lastId = this.books[this.books.length - 1].id;
    if(action == 'edit')
      this.bookToEdit = book;
  }

  addBook(book : Book){
    //this.books.push(book);
    this.books = [...this.books, book];
    this.changeAction('');
  }

  editBook(book : Book){
    this.books = this.books.map(
      b=>{
        if(b.id == book.id)
          return book;
        else
          return b;
      }
    );
    this.changeAction('');
  }

  deleteBook(id : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre")){
      this.books = this.books.filter(
        b => b.id != id
      )
    }
  }

  ngOnInit(): void {
    this.books = [
      new Book(1, "The slight edge", "Jeff Olsen", 40),
      new Book(2, "Power of habits", "Charles Duhigg", 30),
      new Book(3, "The one thing", "Gary W. Keller", 20)
    ]
  }

}
