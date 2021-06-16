import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'participants',
    loadChildren: () => import('./participants/participants.module').then(m => m.ParticipantsModule)
  },
  {
    path: 'interactions',
    loadChildren: () => import('./interactions/interactions.module').then(m => m.InteractionsModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
