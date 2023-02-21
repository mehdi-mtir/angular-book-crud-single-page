import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  @Input() bookToEdit : Book;
  @Output() editedBook = new EventEmitter<Book>();

  constructor() { }

  editBook(titre : string, auteur : string, prix : number){
    this.editedBook.emit(this.bookToEdit);
  }

  ngOnInit(): void {
  }

}
