import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { AnimalsPage } from './page/animals/animals.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalFormComponent } from './component/animal-form/animal-form.component';

@NgModule({
  declarations: [AppComponent, SideMenuComponent, AnimalFormComponent],
  entryComponents: [AnimalFormComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
