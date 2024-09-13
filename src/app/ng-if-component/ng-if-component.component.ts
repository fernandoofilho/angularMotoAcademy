import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-if-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if-component.component.html',
  styleUrl: './ng-if-component.component.css'
})
export class NgIfComponentComponent {
  showSquare: boolean = true;
}
