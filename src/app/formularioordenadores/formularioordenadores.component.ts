import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularioordenadores',
  imports: [FormsModule],
  templateUrl: './formularioordenadores.component.html',
  styleUrl: './formularioordenadores.component.scss'
})
export class FormularioordenadoresComponent {
  ordenador:Ordenador={}as Ordenador;

  constructor(private ordenadorRestService: OrdenadorRestService, private router:Router){

  }
  public insertar(){
    this.ordenadorRestService.insertar(this.ordenador).subscribe((datos)=>{
      console.log("insertado");
      this.router.navigate([""]);
    })
  }
}
