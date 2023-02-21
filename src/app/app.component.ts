import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  composant = '1';

  /*changeComponent(event){
    console.log(event);
    this.composant = event.target.value;
  }*/
}
