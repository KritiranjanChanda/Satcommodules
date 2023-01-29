import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsependingRoutingModule } from './Responsepending-routing.module';
import { ResponsependingComponent } from './Responsepending.component';
import { ResponsependingContentComponent } from './Responsepending-content/Responsepending-content.component';
import { DataTablesModule } from 'angular-datatables';
import { ResponsependingViewComponent } from './Responsepending View/Responsepending-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [ResponsependingComponent,ResponsependingContentComponent, ResponsependingViewComponent],
  imports: [
    CommonModule,
    ResponsependingRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class ResponsependingModule { }
