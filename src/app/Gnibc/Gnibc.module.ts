import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GnibcRoutingModule } from './Gnibc-routing.module';
import { GnibcComponent } from './Gnibc.component';
import { GnibcContentComponent } from './Gnibc-content/Gnibc-content.component';
import { DataTablesModule } from 'angular-datatables';
import { GnibcViewComponent } from './Gnibc-view/Gnibc-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [GnibcComponent, GnibcContentComponent, GnibcViewComponent],
  imports: [
    CommonModule,
    GnibcRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class GnibcModule { }
