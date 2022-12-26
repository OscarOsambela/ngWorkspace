import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUnoSharedModule } from '../../../app-uno/src/app/app.module';
import { AppDosSharedModule } from '../../../app-dos/src/app/app.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app1/home'
  },
  {
    path: 'app1', 
    loadChildren: ()=> import('../../../app-uno/src/app/app.module').then(m=>m.AppUnoSharedModule)
  },
  {
    path: 'app2',
    loadChildren: ()=> import('../../../app-dos/src/app/app.module').then(m=>m.AppDosSharedModule)
  },
  {
    path: '**',
    redirectTo: 'app1/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    //importar los modulos para cargar y usar sus rutas desde app principal (appcero)
    AppUnoSharedModule.forRoot(),
    AppDosSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule   { }
