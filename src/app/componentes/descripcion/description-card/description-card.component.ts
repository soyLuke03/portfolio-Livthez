import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description-card.component.html',
  styleUrl: './description-card.component.css'
})
export class DescriptionCardComponent {
  @Input() titulo: string = '';
  @Input() imagen: string | undefined = '';
  @Input() chips: string[] | undefined = [];
  @Input() index: number | null = null;
}
