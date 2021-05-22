import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TapasComponent} from './components/tapas/tapas.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {CardComponent} from './shared/components/card/card.component';
import {CardListComponent} from './shared/components/card-list/card-list.component';



const routes: Routes = [


  {
    path: 'login', component: LoginComponent
  }, {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'productos', component: CardListComponent
      },

    ]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
