import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './componente01/componente01.component';
import { NgIfComponentComponent } from './ng-if-component/ng-if-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente01Component, NgIfComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular-tutorial';
}
