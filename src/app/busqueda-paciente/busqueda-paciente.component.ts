import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Paciente } from "../paciente";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-busqueda-paciente",
  templateUrl: "./busqueda-paciente.component.html",
  styleUrls: ["./busqueda-paciente.component.css"]
})
export class BusquedaPacienteComponent implements OnInit {
  paciente = new Paciente(null, "", "", "", null, "", "", "", "");

  public pacientes = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    //this.rowData = this.http.get(
    // "https://www.ag-grid.com/example-assets/small-row-data.json"
    //);
  }

  buscarPaciente() {
    let paciente = new Paciente(
      111111111111,
      "asidhaosudhais",
      "sdfghsdfgfgh",
      "sdfgdfgdfg",
      654654,
      "sdfgsdfg",
      "sdfgsdfgdfg",
      "sdfgdfgsd",
      "dfgsdfgsdf"
    );
    let paciente2 = new Paciente(
      222222,
      "dddddd",
      "ddddd",
      "dddd",
      654654,
      "ddd",
      "ddd",
      "email",
      "nacime"
    );
    this.pacientes.push(paciente);
    this.pacientes.push(paciente2);
    console.log("buscar paciente", this.pacientes);
  }

  limpiarFiltros() {
    console.log("limpiar filtros", this.paciente);
  }

  editarPaciente(pacienteEdit) {
    console.log("editar ", pacienteEdit);
    this.router.navigate(["paciente-form"], {
      queryParams: { nomrbe: pacienteEdit.nombre }
    });
  }
  /**newPaciente() {
    this.router.navigate([
      "/busqueda",
      { outlets: { detail: ["pacienteform", "1"] } }
    ]);
  }*/
}
