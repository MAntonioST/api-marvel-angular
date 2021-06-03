import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './views/home/characters/characters.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

{
path: 'characters',
component: CharactersComponent,
pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
