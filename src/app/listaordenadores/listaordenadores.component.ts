import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listaordenadores',
  imports: [RouterLink, CommonModule,FormsModule],
  templateUrl: './listaordenadores.component.html',
  styleUrl: './listaordenadores.component.scss'
})
export class ListaordenadoresComponent {
  listaOrdenadores: Ordenador[]=[];
  selectedFilter: string = '';
  searchTerm: string = '';
  filteredItems: any[] = [];
  items: any[] = [];


  constructor(private OrdenadorRestService: OrdenadorRestService){
    OrdenadorRestService.buscarTodos().subscribe((datos) => {
      this.listaOrdenadores = datos;
    })
  }

 applyFilter(): void {
    if (!this.selectedFilter || !this.searchTerm) {
      this.filteredItems = this.items;  // Si no hay filtro ni búsqueda, muestra todos los elementos
      return;
    }

    this.filteredItems = this.items.filter(item => {
      const filterValue = item[this.selectedFilter]?.toLowerCase();
      return filterValue && filterValue.includes(this.searchTerm.toLowerCase());
    });
  }


  borrar(numero:number){
      this.OrdenadorRestService.borrar(numero).subscribe(()=>{
        this.OrdenadorRestService.buscarTodos().subscribe((datos)=>{
          this.listaOrdenadores=datos;
        })
    });

  }
}