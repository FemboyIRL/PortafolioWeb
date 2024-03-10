import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.scss'
})
export class SobreMiComponent {
  
}
