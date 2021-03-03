import { Component, OnInit } from "@angular/core";
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
  rowData: any[];
  columnDefs = [
    { field: "identificador", sortable: true, filter: true },
    { field: "nombre", sortable: true, filter: true },
    { field: "apellido", sortable: true, filter: true },
    { field: "direccion", sortable: true, filter: true },
    { field: "telefono", sortable: true, filter: true },
    { field: "direccion", sortable: true, filter: true },
    { field: "ocupacion", sortable: true, filter: true },
    { field: "genero", sortable: true, filter: true },
    { field: "mail", sortable: true, filter: true },
    { field: "nacimiento", sortable: true, filter: true }
  ];
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    //this.rowData = this.http.get(
    // "https://www.ag-grid.com/example-assets/small-row-data.json"
    //);
  }

  buscarPaciente() {
    console.log("buscar paciente", this.paciente);
  }

  limpiarFiltros() {
    console.log("limpiar filtros", this.paciente);
  }
  /**newPaciente() {
    this.router.navigate([
      "/busqueda",
      { outlets: { detail: ["pacienteform", "1"] } }
    ]);
  }*/
}
