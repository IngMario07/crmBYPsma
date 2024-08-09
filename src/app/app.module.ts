import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaPersonalComponent } from './pages/lista-personal/lista-personal.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ListaAsistenciaComponent } from './pages/lista-asistencia/lista-asistencia.component';
import { SancionesComponent } from './pages/sanciones/sanciones.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserComponent } from './pages/user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaPersonalComponent,
    AgendaComponent,
    ListaAsistenciaComponent,
    SancionesComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
