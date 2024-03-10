import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,PantallaInicioComponent,EducacionComponent,PortafolioComponent,SkillsComponent,ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PortafolioWeb';
}
