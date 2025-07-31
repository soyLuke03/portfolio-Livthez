import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../componentes/header/header.component";
import { PresentacionComponent } from "../componentes/presentacion/presentacion.component";
import { DescripcionComponent } from "../componentes/descripcion/descripcion.component";
import { EstudiosCardsComponent } from "../componentes/estudios-cards/estudios-cards.component";
import { CarruselComponent } from "../componentes/carrusel/carrusel.component";
import { DescripcionDropdownComponent } from "../componentes/descripcion-dropdown/descripcion-dropdown.component";
import { ProfileComponent } from "../componentes/profile/profile.component";
import { HerramientasComponent } from "../componentes/herramientas/herramientas.component";
import { CursosYEstudiosComponent } from "../componentes/cursos-y-estudios/cursos-y-estudios.component";
import { NombreComponent } from "../componentes/nombre/nombre.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PresentacionComponent, DescripcionComponent, EstudiosCardsComponent, CarruselComponent, DescripcionDropdownComponent, ProfileComponent, HerramientasComponent, CursosYEstudiosComponent, NombreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-liv';
}
