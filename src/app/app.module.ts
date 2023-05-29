import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { MenuComponent } from './menu/menu.component';
import { TodasTareasComponent } from './todas-tareas/todas-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    MenuComponent,
    TodasTareasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
