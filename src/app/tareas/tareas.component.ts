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


  AnadirTarea(enunciado: string, detalles: string, tiempo: String) {
    this.Tareas.push({ titulo: enunciado, descripcion: detalles, fecha: tiempo, estado:'pendiente' })
    this.inicio = true;
  }
  eliminar(titular: String, detalles: String, fecha: String): void {
    for (let index = 0; index < this.Tareas.length; index++) {
      if (this.Tareas[index].titulo == titular && this.Tareas[index].descripcion == detalles && this.Tareas[index].fecha == fecha) {
        this.Tareas.splice(index)

      }
    }
  }
  modificar(titular: String, detalles: String, fecha: String, tituloNuevo: String, detallesNuevos: String, fechaNueva: String): void {
    for (let index = 0; index < this.Tareas.length; index++) {
      if (this.Tareas[index].titulo == titular && this.Tareas[index].descripcion == detalles && this.Tareas[index].fecha == fecha) {
        this.Tareas.splice(index)
        this.Tareas.push({ titulo: tituloNuevo, descripcion: detallesNuevos, fecha: fechaNueva,estado : 'pendiente' })

      }
    }
  }
}
