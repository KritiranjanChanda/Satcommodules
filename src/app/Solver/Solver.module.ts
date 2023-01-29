import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolverRoutingModule } from './Solver-routing.module';
import { SolverComponent } from './Solver.component';
import { SolverContentComponent } from './Solver-content/Solver-content.component';
import { DataTablesModule } from 'angular-datatables';
import { SolverViewComponent } from './Solver-view/Solver-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { SharingModule } from 'src/app/sharing/sharing.module';

@NgModule({
  declarations: [SolverComponent, SolverContentComponent, SolverViewComponent],
  imports: [
    CommonModule,
    SolverRoutingModule,
    SharingModule,
    DataTablesModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    SharingModule
  ]
})
export class SolverModule { }
