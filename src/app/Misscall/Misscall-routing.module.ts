import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisscallComponent } from './Misscall.component';
import { MisscallContentComponent } from './Misscall-content/Misscall-content.component';
import { MisscallViewComponent } from './Misscall-view/Misscall-view.component';


const routes: Routes = [
  {
    path:"",
    component:MisscallComponent,
    children:[
      {
        path:"Misscallcontent",
        component:MisscallContentComponent
      },
      {
        path:"Misscallview",
        component:MisscallViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisscallRoutingModule { }
