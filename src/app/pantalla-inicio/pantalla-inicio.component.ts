import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-pantalla-inicio',
  standalone: true,
  imports: [CommonModule,AppComponent,RouterModule],
  templateUrl: './pantalla-inicio.component.html',
  styleUrl: './pantalla-inicio.component.scss'
})
export class PantallaInicioComponent {
    constructor(){

    }
}
