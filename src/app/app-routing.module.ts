import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusquedaPacienteComponent } from "./busqueda-paciente/busqueda-paciente.component";
import { HistoriaPacienteComponent } from "./historia-paciente/historia-paciente.component";

import { PacienteFormComponent } from "./paciente-form/paciente-form.component";

const routes: Routes = [
  {
    path: "busqueda-paciente",
    component: BusquedaPacienteComponent
  },

  { path: "", redirectTo: "/busqueda-paciente", pathMatch: "full" },
  { path: "paciente-form", component: PacienteFormComponent },
  { path: "historia-paciente", component: HistoriaPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
