import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListaPersonalComponent } from './pages/lista-personal/lista-personal.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ListaAsistenciaComponent } from './pages/lista-asistencia/lista-asistencia.component';
import { SancionesComponent } from './pages/sanciones/sanciones.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista-personal', component: ListaPersonalComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'lista-asistencia', component: ListaAsistenciaComponent },
  { path: 'sanciones', component: SancionesComponent },
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
