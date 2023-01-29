import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnibcComponent } from './Gnibc.component';
import { GnibcContentComponent } from './Gnibc-content/Gnibc-content.component';
import { GnibcViewComponent } from './Gnibc-view/Gnibc-view.component';


const routes: Routes = [
  {
    path:"",
    component:GnibcComponent,
    children:[
      {
        path:"Gnibccontent",
        component:GnibcContentComponent
      },
      {
        path:"Gnibcview",
        component:GnibcViewComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GnibcRoutingModule { }
