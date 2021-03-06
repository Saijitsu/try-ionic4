import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SideMenuComponent} from './component/side-menu/side-menu.component';
import {AnimalFormComponent} from './component/animal-form/animal-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeStorageService } from './service/native-storage.service';

@NgModule({
  declarations: [AppComponent, SideMenuComponent, AnimalFormComponent],
  entryComponents: [AnimalFormComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule],
  providers: [
    NativeStorageService,
    Geolocation,
    Camera,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
