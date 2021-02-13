import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusquedaPacienteComponent } from "./busqueda-paciente/busqueda-paciente.component";

import { PacienteFormComponent } from "./paciente-form/paciente-form.component";

const routes: Routes = [
  {
    path: "busqueda-paciente",
    component: BusquedaPacienteComponent,
    children: [{ path: "paciente-form", component: PacienteFormComponent }]
  },

  { path: "", redirectTo: "/busqueda", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
