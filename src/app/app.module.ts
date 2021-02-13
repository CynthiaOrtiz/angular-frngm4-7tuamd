import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PacienteFormComponent } from "./paciente-form/paciente-form.component";

import { BusquedaPacienteComponent } from "./busqueda-paciente/busqueda-paciente.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    PacienteFormComponent,
    BusquedaPacienteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
