import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/character';
import { MarvelService } from 'src/app/shared/service/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  allCaracters: Characters [] = [];

  constructor(private characterService: MarvelService) { }



  ngOnInit(): void {
    this.getAllCharacters()
  }

 public getAllCharacters(){

    this.characterService.getAllCharacters().subscribe(
      resp => {
        this.allCaracters = resp
      },
      error => {
        alert("Houve algum erro ao carregar a lista")
      }
    )
 }
}
