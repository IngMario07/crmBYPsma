import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario = {
    id: 1,
    nombre: 'Nombre del Usuario',
    apellidoP: 'Apellido Paterno',
    apellidoM: 'Apellido Materno',
    id_rol: 1,
    id_turno: 2,
    id_guardia: 'Lunes',
    // Puedes agregar más propiedades según las necesidades
  };

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialización si es necesaria
  }

  rolTexto(idRol: number): string {
    switch (idRol) {
      case 1: return 'Rol 1';
      case 2: return 'Rol 2';
      // Agrega más casos según tus roles
      default: return 'Rol Desconocido';
    }
  }

  turnoTexto(idTurno: number): string {
    switch (idTurno) {
      case 1: return 'Matutino';
      case 2: return 'Vespertino';
      // Agrega más casos según tus turnos
      default: return 'Turno Desconocido';
    }
  }

}
