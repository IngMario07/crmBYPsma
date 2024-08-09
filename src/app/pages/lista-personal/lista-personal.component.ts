// lista-personal.component.ts

import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../core/services/conexion.service';

@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.css']
})
export class ListaPersonalComponent implements OnInit {

  personas = [
    { id: 1, nombre: 'Juan', apellidoP: 'Pérez', apellidoM: 'García', rol: 1, turno: 1, guardia: 'Lunes' },
    { id: 2, nombre: 'María', apellidoP: 'López', apellidoM: 'Martínez', rol: 2, turno: 2, guardia: 'Miércoles' },
    { id: 3, nombre: 'Carlos', apellidoP: 'González', apellidoM: 'Sánchez', rol: 3, turno: 3, guardia: 'Viernes' },
    // Agrega más personas según necesites
  ];

  constructor(private conexionService: ConexionService) { }

  ngOnInit(): void {
    this.conexionService.Get('personal').subscribe(response => {
      console.log(response);
    });
  }

  // Función para convertir el código de rol a texto
  rolTexto(rol: number): string {
    switch (rol) {
      case 1: return 'Operativo';
      case 2: return 'Inactivo';
      case 3: return 'Administrativo';
      default: return '';
    }
  }

  // Función para convertir el código de turno a texto
  turnoTexto(turno: number): string {
    switch (turno) {
      case 1: return 'Matutino';
      case 2: return 'Vespertino';
      case 3: return 'Nocturno';
      default: return '';
    }
  }

  // Función para editar una persona
  editarPersona(persona: any): void {
    console.log('Editar persona:', persona);
    // Aquí puedes implementar la lógica para editar la persona
  }

  // Función para eliminar una persona
  eliminarPersona(persona: any): void {
    console.log('Eliminar persona:', persona);
    // Aquí puedes implementar la lógica para eliminar la persona
  }

  // Función para agregar una nueva persona
  agregarPersona(): void {
    console.log('Agregar nueva persona');
    // Aquí puedes implementar la lógica para agregar una nueva persona
  }

}
