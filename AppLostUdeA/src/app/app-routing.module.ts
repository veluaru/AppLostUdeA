import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EncontreObjetoComponent } from './encontreObjeto/encontreObjeto.component';
import { BuscarObjetoComponent } from './buscarObjeto/buscarObjeto.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'encontreObjeto',
    component: EncontreObjetoComponent
  },
  {
    path: 'buscarObjeto',
    component: BuscarObjetoComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
