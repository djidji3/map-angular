import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Map1Component } from './pages/map1/map1.component';

const routes: Routes = [
  {path:'map1', component:Map1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
