import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getTestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }


  //Creo metodo que recibe los parametros  usando HttpClientModule y observable
  getNoticias(parametros:any):Observable<any>{

    const url=" https://newsapi.org/v2/top-headlines?country="+parametros.pais+"&category="+parametros.categoria+"&apiKey=25f6dbea914a4f9ab230c0f1cb43c428";
    return this.http.get(url);

  }

}
