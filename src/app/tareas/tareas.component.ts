import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  inicio: boolean = false;

  Tareas: Tarea[] = []
  Estado: string = '';
  minutos: number = 0;
  horas: number = 0;
  dias: number = 0;
  meses: number = 0;
  ano: number = 0;

  minutoschage(min: string): void {
    this.minutos = Number(min);
  }
  horaschange(hor: string): void {
    this.horas = Number(hor)
  }
  diaschange(dias: string): void {
    this.dias = Number(dias)
  }
  meseschange(meses: string): void {
    this.meses = Number(meses)
  }

  AnadirTarea(enunciado: String, detalles: String, anos: String) {
    this.Tareas.push({ titulo: enunciado, descripcion: detalles, fecha: { minutos: this.minutos, hora: this.horas, Dia: this.dias, Mes: this.meses, Ano: Number(anos) }, estado: "pendiente" })
    this.inicio = true;
  }
  eliminar(titular: String, detalles: String): void {
    for (let index = 0; index < this.Tareas.length; index++) {
      if (this.Tareas[index].titulo == titular && this.Tareas[index].descripcion == detalles) {
        this.Tareas.splice(index)

      }
    }
  }
  cambiarEstado(estado: string): void {
    this.Estado = estado
  }
  modificar(titular: String, detalles: String, tituloNuevo: String, detallesNuevos: String, anos: String): void {
    for (let index = 0; index < this.Tareas.length; index++) {
      if (this.Tareas[index].titulo == titular && this.Tareas[index].descripcion == detalles) {
        this.Tareas.splice(index)
        this.Tareas.push({ titulo: tituloNuevo, descripcion: detallesNuevos, fecha: { minutos: this.minutos, hora: this.horas, Dia: this.dias, Mes: this.meses, Ano: Number(anos) }, estado: this.Estado })

      }
    }
  }
}
