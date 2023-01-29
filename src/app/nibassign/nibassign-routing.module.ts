import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { nibassignComponent } from './nibassign.component';
import { nibassignContentComponent } from './nibassign-content/nibassign-content.component';
import { nibassignViewComponent } from './nibassign-view/nibassign-view.component';


const routes: Routes = [
  {
    path:"",
    component:nibassignComponent,
    children:[
      {
        path:"nibassigncontent",
        component:nibassignContentComponent
      },
      {
        path:"nibassignview",
        component:nibassignViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class nibassignRoutingModule { }
