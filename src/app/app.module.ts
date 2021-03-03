import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PacienteFormComponent } from "./paciente-form/paciente-form.component";
import { BusquedaPacienteComponent } from "./busqueda-paciente/busqueda-paciente.component";
import { AppRoutingModule } from "./app-routing.module";

import { CommonModule } from "@angular/common";
import { MatIconModule, MatButtonModule } from "@angular/material";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import {
  fas,
  faStar,
  faFilm,
  faEraser
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { HistoriaPacienteComponent } from "./historia-paciente/historia-paciente.component";

import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    AppComponent,
    PacienteFormComponent,
    BusquedaPacienteComponent,
    HistoriaPacienteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(fas, far, faStar, faFilm, faEraser);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
