import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ModelCharacter } from 'src/app/model/modelCharacter';


@Injectable({
  providedIn: 'root'
})


export class MarvelService {

  PUBLIC_KEY = environment.publicKey;
  HASH = environment.md5;
  TS = environment.timeStamp;
  URL_API = environment.urlAPI

   urlApi = `${this.URL_API}?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

   data: any;

  constructor(
    private http:HttpClient
  ) { }


 public  getAllCharacters(): Observable<ModelCharacter[]>{
    return this.http.get<ModelCharacter[]>(this.urlApi)
    .pipe(map((data:any) => data.data.results))

  }
}


