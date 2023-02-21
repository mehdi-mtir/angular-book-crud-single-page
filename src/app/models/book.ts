export class Book {
  id : number;
  titre : string;
  auteur : string;
  prix : number;

  constructor(id : number, titre : string, auteur : string, prix : number){
    this.id = id;
    this.titre = titre;
    this.auteur  = auteur;
    this.prix = prix;
  }
}
