import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeWebComponent } from './pages/time-web/time-web.component';
import {ListComponent} from './pages/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: TimeWebComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
