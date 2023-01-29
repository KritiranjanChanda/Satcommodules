import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalleridComponent } from './Callerid.component';
import { CalleridContentComponent } from './Callerid-content/Callerid-content.component';
import { CalleridViewComponent } from './Callerid-view/Callerid-view.component';


const routes: Routes = [
  {
    path:"",
    component:CalleridComponent,
    children:[
      {
        path:"Calleridcontent",
        component:CalleridContentComponent
      },
      {
        path:"Calleridview",
        component:CalleridViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalleridRoutingModule { }
