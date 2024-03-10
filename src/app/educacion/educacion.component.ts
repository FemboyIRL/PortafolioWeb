import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.scss'
})
export class EducacionComponent {
  
}
