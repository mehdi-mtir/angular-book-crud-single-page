import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() message : string;
  @Output() envoiMessage = new EventEmitter<string>();
  reponse : string;

  constructor() { }

  sendMessage(){
    this.envoiMessage.emit(this.reponse);
  }

  ngOnInit(): void {
  }

}
