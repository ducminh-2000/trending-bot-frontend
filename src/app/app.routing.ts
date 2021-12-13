import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { CoincomponentComponent } from './views/coincomponent/coincomponent.component';
import { CreatecoinComponent } from './views/coincomponent/createcoin/createcoin.component';
import { UpdatecoinComponent } from './views/coincomponent/updatecoin/updatecoin.component';
import { TrendingComponent } from './views/trending/trending.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'coin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'coin',
        data: {
          title: 'Coin'
        },
        children: [
          {
            path: '',
            data: {
              title: 'Coin'
            },
            component: CoincomponentComponent,
          },
          {
            path: 'create',
            component: CreatecoinComponent,
            data: {
              title: 'Create'
            }
          },
          {
            path: 'update/:id',
            component: UpdatecoinComponent,
            data: {
              title: 'Update'
            }
          },
          {
            path: 'trending',
            data: {
              title: 'Trending'
            },
            component: TrendingComponent,
          },
        ]
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
