import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listaordenadores',
  imports: [RouterLink],
  templateUrl: './listaordenadores.component.html',
  styleUrl: './listaordenadores.component.scss'
})
export class ListaordenadoresComponent {
  listaOrdenadores: Ordenador[]=[];

  constructor(private OrdenadorRestService: OrdenadorRestService){
    OrdenadorRestService.buscarTodos().subscribe((datos) => {
      this.listaOrdenadores = datos;
    })
  }
  borrar(numero:number){
      this.OrdenadorRestService.borrar(numero).subscribe(()=>{
        this.OrdenadorRestService.buscarTodos().subscribe((datos)=>{
          this.listaOrdenadores=datos;
        })
    });

  }
}
