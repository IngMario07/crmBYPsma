import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router si es necesario

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private router: Router) { } 

  ngOnInit(): void {
  }


}
