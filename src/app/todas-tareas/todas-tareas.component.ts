import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.component.html',
  styleUrls: ['./todas-tareas.component.css']
})
export class TodasTareasComponent {

  Tareas: Tarea[] = []

  eliminar(titular: String): void {
    for (let index = 0; index < this.Tareas.length; index++) {
      if (this.Tareas[index].titulo == titular) {
        this.Tareas.splice(index)

      }
    }
  }
}
