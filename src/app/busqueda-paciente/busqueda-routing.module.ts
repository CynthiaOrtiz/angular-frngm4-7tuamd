import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PacienteFormComponent } from "../paciente-form/paciente-form.component";

const routes: Routes = [{ path: "busqueda", component: PacienteFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedaRoutingModule {}
