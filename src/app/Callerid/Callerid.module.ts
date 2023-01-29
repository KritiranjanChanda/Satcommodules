import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalleridRoutingModule } from './Callerid-routing.module';
import { CalleridComponent } from './Callerid.component';
import { CalleridContentComponent } from './Callerid-content/Callerid-content.component';
import { DataTablesModule } from 'angular-datatables';
import { CalleridViewComponent } from './Callerid-view/Callerid-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [CalleridComponent, CalleridContentComponent, CalleridViewComponent],
  imports: [
    CommonModule,
    CalleridRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class CalleridModule { }
