import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelComponent } from './services/marvel/marvel.component';
import { MarvelModelComponent } from './model/marvel-model/marvel-model.component';
import { MarvelServiceComponent } from './services/marvel-service/marvel-service.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    MarvelModelComponent,
    MarvelServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
