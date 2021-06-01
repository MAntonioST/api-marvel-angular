import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelModelComponent } from 'src/app/model/marvel-model/marvel-model.component';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MarvelServiceComponent {

  private url = environment.urlAPI + environment.timeStamp + environment.publicKey + environment.md5 + "&limit=8"
  constructor(private http:HttpClient) { }

  public getHeroes():Observable<MarvelModelComponent[]>{
    return this.http.get<MarvelModelComponent[]>(this.url)
  }

}



