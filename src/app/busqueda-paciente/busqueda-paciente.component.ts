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
    {
      headerName: "cedula",
      field: "identificador",
      sortable: true,
      filter: true
    },
    { headerName: "nombre", field: "nombre", sortable: true, filter: true },
    { headerName: "apellido", field: "apellido", sortable: true, filter: true },
    {
      headerName: "direccion",
      field: "direccion",
      sortable: true,
      filter: true
    },
    { headerName: "telefono", field: "telefono", sortable: true, filter: true },
    {
      headerName: "ocupacion",
      field: "ocupacion",
      sortable: true,
      filter: true
    },
    { headerName: "genero", field: "genero", sortable: true, filter: true },
    { headerName: "mail", field: "mail", sortable: true, filter: true },
    {
      headerName: "nacimiento",
      field: "nacimiento",
      sortable: true,
      filter: true
    }
  ];
  constructor(private router: Router, private http: HttpClient) {
    this.rowData = [
      {
        identificador: 5,
        nombre: 10,
        apellido: 10,
        direccion: 15,
        telefono: 15,
        ocupacion: 20
      }
    ];
  }

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
