import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisscallRoutingModule } from './Misscall-routing.module';
import { MisscallComponent } from './Misscall.component';
import { MisscallContentComponent } from './Misscall-content/Misscall-content.component';
import { DataTablesModule } from 'angular-datatables';
import { MisscallViewComponent } from './Misscall-view/Misscall-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [MisscallComponent, MisscallContentComponent, MisscallViewComponent],
  imports: [
    CommonModule,
    MisscallRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class MisscallModule { }
