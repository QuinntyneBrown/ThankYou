import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionsComponent } from './interactions.component';

const routes: Routes = [{ path: '', component: InteractionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionsRoutingModule { }
