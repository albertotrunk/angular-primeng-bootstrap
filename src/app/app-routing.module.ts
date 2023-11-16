// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NewPlanetComponent } from './new-planet/new-planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { AuthGuard } from './auth.guard'; // Importa el AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'new-planet', component: NewPlanetComponent, canActivate: [AuthGuard] }, // Protegida por AuthGuard
  { path: 'planets', component: PlanetsComponent, canActivate: [AuthGuard] }, // Protegida por AuthGuard
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] }, // Protegida por AuthGuard
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
