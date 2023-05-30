import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() public CambiarMenu = { estadoMenu: true };
  cambiarCrear(): void {
    this.CambiarMenu.estadoMenu = false
  }
  cambiarTarea():void{
    this.CambiarMenu.estadoMenu = true
  }


}
