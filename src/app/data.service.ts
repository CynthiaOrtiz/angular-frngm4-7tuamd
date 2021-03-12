import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
  constructor() {}

  private paciente = new BehaviorSubject<any>({});

  setNewPacienteEdit(paciente: any) {
    this.paciente.next(paciente);
  }

  getNewPacienteEdit() {
    return this.paciente.asObservable();
  }
}
