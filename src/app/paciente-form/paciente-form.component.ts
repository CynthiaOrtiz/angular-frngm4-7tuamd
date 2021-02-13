import { Component } from "@angular/core";

import { Paciente } from "../paciente";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-paciente-form",
  templateUrl: "./paciente-form.component.html",
  styleUrls: ["./paciente-form.component.css"]
})
export class PacienteFormComponent {
  model = new Paciente(17, "Cya", "Pz", "dir", 915);

  submitted = false;

  constructor(private _route: ActivatedRoute) {}

  onSubmit() {
    this.submitted = true;
    this.newHero();
    //ir a la pagina de busqueda de paciente
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new Paciente(0, "", "", "", 0);
  }

  /////////////////////////////
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
