import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion_Noticias';

    //Creamos array para guardar las noticias
    listadoDeNoticias: any[]=[];
    LoadingSpinner:any=false;

    //Se crea constructor tipo api 
    constructor(private _api:NoticiasService){

  }




  //Creacion de metodo que recibe los parametros desde el formulario
  buscarNoticias(parametros:any){
    this.LoadingSpinner=true;
    
    console.log("HELLO WORLD!!");
    console.log(parametros);

    setTimeout(()=>{

 
    this._api.getNoticias(parametros).subscribe(result=>
      {
        this.LoadingSpinner=false;
        console.log(result);
        //llenado de array de noticias
        this.listadoDeNoticias=result.articles;      
      })

    },1000)

    }
  }



