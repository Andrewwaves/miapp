import { Routes } from '@angular/router';
import { ListaordenadoresComponent } from './listaordenadores/listaordenadores.component';
import { FormularioordenadoresComponent } from './formularioordenadores/formularioordenadores.component';

export const routes: Routes = [
    {path:"",component:ListaordenadoresComponent},
    {path:"formularioordenadores",component:FormularioordenadoresComponent}
];
