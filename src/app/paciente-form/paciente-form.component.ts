import { Component, ViewChild } from "@angular/core";

import { Paciente } from "../paciente";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-paciente-form",
  templateUrl: "./paciente-form.component.html",
  styleUrls: ["./paciente-form.component.css"]
})
export class PacienteFormComponent {
  paciente = new Paciente(0, "", "", "", 0);

  @ViewChild("pacienteForm", null) pacienteForm: NgForm;
  constructor(private _route: ActivatedRoute) {}

  onSubmit() {
    console.log("SUBMIT");
    this.newHero();

    //ir a la pagina de busqueda de paciente
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.paciente);
  }

  newHero() {
    this.paciente = new Paciente(0, "", "", "", 0);
  }
  guardarPaciente() {
    console.log("guardar PAciente", this.paciente);
    this.newHero();
    this.pacienteForm.reset();
  }
  /////////////////////////////
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
