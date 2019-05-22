import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './page/home/home.module#HomePageModule' },
  { path: 'grid', loadChildren: './page/grid/grid.module#GridPageModule' },
  { path: 'alert', loadChildren: './page/alert/alert.module#AlertPageModule' },
  { path: 'animals', loadChildren: './page/animals/animals.module#AnimalsPageModule' },
  { path: 'details/:name', loadChildren: './page/details/details.module#DetailsPageModule' },
  { path: 'photo', loadChildren: './page/photo/photo.module#PhotoPageModule' },
  { path: 'geolocation', loadChildren: './page/geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'native-storage', loadChildren: './page/native-storage/native-storage.module#NativeStoragePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
