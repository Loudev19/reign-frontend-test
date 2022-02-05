import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {path: '', redirectTo: '/all', pathMatch: 'full'},
  {path: 'all', component: AllComponent},
  {path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
