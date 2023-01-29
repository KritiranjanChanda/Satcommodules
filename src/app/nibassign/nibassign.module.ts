import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { nibassignRoutingModule } from './nibassign-routing.module';
import { nibassignComponent } from './nibassign.component';
import { nibassignContentComponent } from './nibassign-content/nibassign-content.component';
import { DataTablesModule } from 'angular-datatables';
import { nibassignViewComponent } from './nibassign-view/nibassign-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [nibassignComponent, nibassignContentComponent, nibassignViewComponent],
  imports: [
    CommonModule,
    nibassignRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class nibassignModule { }
