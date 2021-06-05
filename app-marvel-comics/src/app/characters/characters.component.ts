import { Component, OnInit } from '@angular/core';
import { ModelCharacter } from 'src/app/model/modelCharacter';
import { MarvelService } from 'src/app/service/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: ModelCharacter [] = [];

  constructor(private characterService: MarvelService) { }



  ngOnInit(): void {
    this.getAllCharacters()
  }

 public getAllCharacters(){

    this.characterService.getAllCharacters().subscribe(
      resp => {
        this.allCharacters = resp
      },
      error => {
        alert("Houve algum erro ao carregar a lista")
      }
    )
 }
}
