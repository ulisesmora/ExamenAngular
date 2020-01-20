//Importar modulos del router de Angular
import { ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes

import { CharacterComponent } from "./character/character.component";
import { LocationComponent} from "./location/location.component";


//Array de rutas 
const appRoutes: Routes = [
    {path: "Characteres", component: CharacterComponent},
    {path: "Locations", component: LocationComponent},
    {path: "**", component: CharacterComponent}
];


//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

