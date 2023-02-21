import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  @Input() lastId : number;
  @Output() bookToAdd = new EventEmitter<Book>();

  constructor() { }

  addBook(titre : string, auteur : string, prix : number){
    const newBook = new Book(this.lastId + 1, titre, auteur, prix);
    this.bookToAdd.emit(newBook);
  }

  ngOnInit(): void {
  }

}
