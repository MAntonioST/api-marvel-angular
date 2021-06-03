import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/model/character';
import { MarvelService } from 'src/app/shared/service/marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters: Characters [] = [];

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
