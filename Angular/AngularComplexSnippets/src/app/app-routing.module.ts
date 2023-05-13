import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagemaptestComponent } from './imagemap/imagemaptest/imagemaptest.component';

const routes: Routes = [
  { path: '' , component : ImagemaptestComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { } 