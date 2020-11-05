import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeaderComponent} from './header/header.component'
import { TestesComponent } from './testes/testes.component';

const routes: Routes = [
  
  { path: '', component: TestesComponent },
  
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
