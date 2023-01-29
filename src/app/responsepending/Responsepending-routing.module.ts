import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponsependingComponent } from './Responsepending.component';
import { ResponsependingContentComponent } from './Responsepending-content/Responsepending-content.component';
import { ResponsependingViewComponent } from './Responsepending View/Responsepending-view.component';


const routes: Routes = [
  {
    path:"",
    component:ResponsependingComponent,
    children:[
      {
        path:"Responsependingcontent",
        component:ResponsependingContentComponent
      },
      {
        path:"Responsependingview",
        component:ResponsependingViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsependingRoutingModule { }
