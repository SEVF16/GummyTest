import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cliente', component: ClientComponent, canActivate: [LoginGuard]},
  {path: ':id', component: DetailClientComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
