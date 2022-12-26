import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { NavComponent } from './components/nav/nav.component';

//listamos providers de manera compartida
const providers: [] = [];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

//crear un modulo compartido que se usa en el app-routing-module de appcero
//compartir este m odulo de manera controlada con otras aplicaciones que lo necesiten
@NgModule({})
export class AppUnoSharedModule{
  static forRoot(): ModuleWithProviders<any>{
    return {
      ngModule: AppModule,
      providers
    }
  }
}