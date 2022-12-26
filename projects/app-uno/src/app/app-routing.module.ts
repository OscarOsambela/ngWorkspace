import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'app1',
    redirectTo: 'home'
  },
  {
    path: 'app1/home',
    component: HomePageComponent
  },
  {
    path: 'app1/settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
