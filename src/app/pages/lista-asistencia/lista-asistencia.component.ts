import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrl: './lista-asistencia.component.css'
})
export class ListaAsistenciaComponent implements OnInit {

  asistencias = [
    { id: 1, id_personal: 1, fecha: '2024-07-16', presente: true, chequeo_material: true, id_jefe_encargado: 1 },
    { id: 2, id_personal: 2, fecha: '2024-07-17', presente: false, chequeo_material: false, id_jefe_encargado: 2 },
    { id: 3, id_personal: 3, fecha: '2024-07-18', presente: true, chequeo_material: true, id_jefe_encargado: 1 },
    // Agrega más asistencias según necesites
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Función para editar una asistencia
  editarAsistencia(asistencia: any): void {
    console.log('Editar asistencia:', asistencia);
    // Aquí puedes implementar la lógica para editar la asistencia
  }

  // Función para eliminar una asistencia
  eliminarAsistencia(asistencia: any): void {
    console.log('Eliminar asistencia:', asistencia);
    // Aquí puedes implementar la lógica para eliminar la asistencia
  }

  // Función para agregar una nueva asistencia
  agregarAsistencia(): void {
    console.log('Agregar nueva asistencia');
    // Aquí puedes implementar la lógica para agregar una nueva asistencia
  }

}
