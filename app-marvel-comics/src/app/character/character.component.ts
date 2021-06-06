import { Component, OnInit, Input } from '@angular/core';
import { ModelCharacter } from 'src/app/model/modelCharacter';
import { MarvelService } from 'src/app/service/marvel.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
    character: any;

    allCharacters: ModelCharacter [] = [];

    @Input()
    isLoading: any;

    constructor(private characterService: MarvelService) { }


    ngOnInit(): void {
      this.getAllCharacters()
    }

   public getAllCharacters(){

      this.characterService.getAllCharacters().subscribe(

        resp => {
          this.isLoading=false;
          this.allCharacters = resp
          if(this.allCharacters.length){
            this.isLoading=true
          }
        }

      )
   }

}
