import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.component.html',
  styleUrls: ['./todas-tareas.component.css']
})
export class TodasTareasComponent {
  Estado: String = '';
  Tareas: Tarea[] = []
  minutos: number = 0;
  horas: number = 0;
  dias: number = 0;
  meses: number = 0;
  ano: number = 0;


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
  modificar(titular: String, detalles: String, tituloNuevo: String, detallesNuevos: String, fechaNueva: String): void {
    for (let index = 0; index < this.Tareas.length; index++) {
      if (this.Tareas[index].titulo == titular && this.Tareas[index].descripcion == detalles) {
        this.Tareas.splice(index)
        this.Tareas.push({ titulo: tituloNuevo, descripcion: detallesNuevos, fecha: { minutos: this.minutos, hora: this.horas, Dia: this.dias, Mes: this.meses, Ano: this.ano }, estado: this.Estado })

      }
    }
  }
}
