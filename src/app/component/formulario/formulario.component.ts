import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


categoriaseleccionada:any="general"; 
 paisseleccionado:any="mx"; 

 //Creacion de OUTPUT PARA Capturar los parametros enviados por el formulario
 @Output() parametrosSeleccionados=new EventEmitter<any>();

 //Arreglos con la informacion que llena los combos
categorias:any[]=[
  {value:'general',name:'General'},
  {value:'business',name:'Negocios'}
 ]

 paises:any[]=[
  {value:'mx',name:'Mexico'},
  {value:'ch',name:'China'}
 ]

BotonBuscar(){
 //  console.log(this.categoriaseleccionada);
 //  console.log(this.paisseleccionado);

 //Creacion de constante tipo objeto que guarda las opciones seleccionadas
 const PARAMETROS={
    categoria:this.categoriaseleccionada,
    pais:this.paisseleccionado

 }

 //Asignamos los valores seleccionado y se emiten
 this.parametrosSeleccionados.emit(PARAMETROS);

}



  constructor() { }

  ngOnInit(): void {
  }

}
