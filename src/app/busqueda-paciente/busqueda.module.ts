import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BusquedaRoutingModule } from "./busqueda-routing.module";
import { BusquedaPacienteComponent } from "./busqueda-paciente.component";

@NgModule({
  imports: [CommonModule, BusquedaRoutingModule],
  declarations: [BusquedaPacienteComponent]
})
export class ProfileModule {}
