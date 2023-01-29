import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivecallsRoutingModule } from './Livecalls-routing.module';
import { LivecallsComponent } from './Livecalls.component';
import { LivecallsContentComponent } from './Livecalls-content/Livecalls-content.component';
import { DataTablesModule } from 'angular-datatables';
import { LivecallsViewComponent } from './Livecalls-view/Livecalls-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [LivecallsComponent, LivecallsContentComponent, LivecallsViewComponent],
  imports: [
    CommonModule,
    LivecallsRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class LivecallsModule { }
