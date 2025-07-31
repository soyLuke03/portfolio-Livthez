import { Component } from '@angular/core';
import { DescriptionCardComponent } from "./description-card/description-card.component";
import { CommonModule } from '@angular/common';
import { DescriptionCardCollection } from './model/card.model';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [DescriptionCardComponent, CommonModule],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {

  cards: DescriptionCardCollection = [
    {
      title: 'HOLA 1',
      chips: [],
      imagenUrl: 'pene.png'
    },
    {
      title: 'PENETRACION',
      chips: ['Pito', 'Chupa', 'Me mola la liv'],
      imagenUrl: ''
    }
  ];
}
