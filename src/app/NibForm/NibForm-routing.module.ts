import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NibFormComponent } from './NibForm.component';
import { NibFormContentComponent } from './NibForm-content/NibForm-content.component';
import { NibFormViewComponent } from './NibForm-view/NibForm-view.component';


const routes: Routes = [
  {
    path:"",
    component:NibFormComponent,
    children:[
      {
        path:"NibFormcontent",
        component:NibFormContentComponent
      },
      {
        path:"NibFormview",
        component:NibFormViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NibFormRoutingModule { }
