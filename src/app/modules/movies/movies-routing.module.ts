import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarLayoutComponent } from './layouts/top-bar-layout/top-bar-layout.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

const routes: Routes = [
  {
    path: '',
    component: TopBarLayoutComponent,
    children: [
      {
        path: '',
        component: MoviesPageComponent,
      },
      {
        path: 'details/:id',
        component: MoviePageComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
