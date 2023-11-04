import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {
  

  //Creamos Decorador input para recibir la informacion del componente
  @Input() listadoNoticias:any;

  constructor() { }

  ngOnInit(): void {
  }

}
