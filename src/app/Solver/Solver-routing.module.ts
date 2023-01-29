import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolverComponent } from './Solver.component';
import { SolverContentComponent } from './Solver-content/Solver-content.component';
import { SolverViewComponent } from './Solver-view/Solver-view.component';


const routes: Routes = [
  {
    path:"",
    component:SolverComponent,
    children:[
      {
        path:"Solvercontent",
        component:SolverContentComponent
      },
      {
        path:"Solverview",
        component:SolverViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolverRoutingModule { }
