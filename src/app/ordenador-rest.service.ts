import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordenador } from './ordenador';

@Injectable({
  providedIn: 'root'
})
export class OrdenadorRestService {

  constructor(private httpClient:HttpClient) { }

  public buscarTodos():Observable<Ordenador[]>{
    return this.httpClient.get<Ordenador[]>("http://localhost:8080/webapi/ordenadores")
  }

  public insertar(ordenador:Ordenador):Observable<Ordenador>{
    return this.httpClient.post<Ordenador>("http://localhost:8080/webapi/ordenadores",ordenador)
  }

  public borrar(numero:number):Observable<Ordenador>{
    return this.httpClient.delete<Ordenador>(`http://localhost:8080/webapi/ordenadores/${numero}`)
  }
}
