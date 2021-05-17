import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-busqueda-paciente',
  templateUrl: './busqueda-paciente.component.html',
  styleUrls: ['./busqueda-paciente.component.css']
})
export class BusquedaPacienteComponent implements OnInit {
  paciente = new Paciente(null, '', '', '', null, '', '', '', '');

  public pacientes = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.http
      .get('https://localhost:8080/example-assets/small-row-data.json')
      .subscribe(data => {
        console.log('buscar pacientes TODOS: ', data);
      });
  }

  buscarPaciente() {
    let paciente = new Paciente(
      111111111111,
      'asidhaosudhais',
      'sdfghsdfgfgh',
      'sdfgdfgdfg',
      654654,
      'sdfgsdfg',
      'sdfgsdfgdfg',
      'sdfgdfgsd',
      'dfgsdfgsdf'
    );
    let paciente2 = new Paciente(
      222222,
      'dddddd',
      'ddddd',
      'dddd',
      654654,
      'ddd',
      'ddd',
      'email',
      'nacime'
    );
    this.pacientes.push(paciente);
    this.pacientes.push(paciente2);
    console.log('buscar paciente', this.pacientes);
    console.log(
      'buscar pacientes TODOS1: ',
      this.http.get(
        'localhost:8080/adminPacServ/api/public/adminpaciente/buscarPacientes'
      )
    );
  }

  limpiarFiltros() {
    console.log('limpiar filtros', this.paciente);
  }

  editarPaciente(pacienteEdit) {
    console.log('editar ', pacienteEdit);
    this.router.navigate(['paciente-form'], {
      queryParams: { nombre: pacienteEdit.nombre, paciente: pacienteEdit }
    });

    this.dataService.setNewPacienteEdit(pacienteEdit);
  }
  /**newPaciente() {
    this.router.navigate([
      "/busqueda",
      { outlets: { detail: ["pacienteform", "1"] } }
    ]);
  }*/
}
