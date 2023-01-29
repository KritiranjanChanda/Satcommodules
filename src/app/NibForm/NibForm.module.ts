import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NibFormRoutingModule } from './NibForm-routing.module';
import { NibFormComponent } from './NibForm.component';
import { NibFormContentComponent } from './NibForm-content/NibForm-content.component';
import { DataTablesModule } from 'angular-datatables';
import { NibFormViewComponent } from './NibForm-view/NibForm-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [NibFormComponent, NibFormContentComponent, NibFormViewComponent],
  imports: [
    CommonModule,
    NibFormRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class NibFormModule { }
