import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './get-data/get-data.component';
import { ListDataComponent } from './list-data/list-data.component';

const routes: Routes = [
  {
    path: '', component: ListDataComponent,
  },
  {
    path: 'get', component: GetDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadDataRoutingModule { }
