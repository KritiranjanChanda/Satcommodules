import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivecallsComponent } from './Livecalls.component';
import { LivecallsContentComponent } from './Livecalls-content/Livecalls-content.component';
import { LivecallsViewComponent } from './Livecalls-view/Livecalls-view.component';


const routes: Routes = [
  {
    path:"",
    component:LivecallsComponent,
    children:[
      {
        path:"Livecallscontent",
        component:LivecallsContentComponent
      },
      {
        path:"Livecallsview",
        component:LivecallsViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivecallsRoutingModule { }
