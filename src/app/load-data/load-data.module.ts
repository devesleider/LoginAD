import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadDataRoutingModule } from './load-data-routing.module';
import { ListDataComponent } from './list-data/list-data.component';
import { GetDataComponent } from './get-data/get-data.component';


@NgModule({
  declarations: [
    ListDataComponent,
    GetDataComponent
  ],
  imports: [
    CommonModule,
    LoadDataRoutingModule
  ]
})
export class LoadDataModule { }
