import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanciones',
  templateUrl: './sanciones.component.html',
  styleUrls: ['./sanciones.component.css']
})
export class SancionesComponent implements OnInit {

  sanciones = [
    { id: 1, id_personal: 1, id_jefe_encargado: 1, fecha: '2024-07-16', motivo: 'Falta de puntualidad' },
    { id: 2, id_personal: 2, id_jefe_encargado: 2, fecha: '2024-07-17', motivo: 'Incumplimiento de normativas' },
    { id: 3, id_personal: 3, id_jefe_encargado: 1, fecha: '2024-07-18', motivo: 'Uso indebido de recursos' },
    // Agrega más sanciones según necesites
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Función para editar una sanción
  editarSancion(sancion: any): void {
    console.log('Editar sanción:', sancion);
    // Aquí puedes implementar la lógica para editar la sanción
  }

  // Función para eliminar una sanción
  eliminarSancion(sancion: any): void {
    console.log('Eliminar sanción:', sancion);
    // Aquí puedes implementar la lógica para eliminar la sanción
  }

  // Función para agregar una nueva sanción
  agregarSancion(): void {
    console.log('Agregar nueva sanción');
    // Aquí puedes implementar la lógica para agregar una nueva sanción
  }

}
