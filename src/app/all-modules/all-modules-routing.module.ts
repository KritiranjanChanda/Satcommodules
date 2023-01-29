import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AllModulesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
      },





      {
        path: 'nibassign',
        loadChildren: () => import('../nibassign/nibassign.module').then(m => m.nibassignModule)
      },





      {
        path: 'NibForm',
        loadChildren: () => import('../NibForm/NibForm.module').then(m => m.NibFormModule)


      },

      {
        path: 'Responsepending',
        loadChildren: () => import('../responsepending/Responsepending.module').then(m => m.ResponsependingModule)
      },

      {
        path: 'Callerid',
        loadChildren: () => import('../Callerid/Callerid.module').then(m => m.CalleridModule)
      },

      {path:  'Misscall',
       loadChildren: () => import('../Misscall/Misscall.module').then(m => m.MisscallModule)
      },

      {path:  'Solver',
       loadChildren: () => import('../Solver/Solver.module').then(m => m.SolverModule)
      },

      {path:  'Livecalls',
       loadChildren: () => import('../Livecalls/Livecalls.module').then(m => m.LivecallsModule)
      },

      {path:  'Gnibc',
       loadChildren: () => import('../Gnibc/Gnibc.module').then(m => m.GnibcModule)
      },















      {
        path: 'assets',
        loadChildren: () => import('./assets/assets.module').then(m => m.AssetsModule)
      },






       {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      },
































    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AllModulesRoutingModule { }
