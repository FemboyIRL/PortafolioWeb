import { Routes } from '@angular/router';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const routes: Routes = [
    {
        path: 'sobre-mi',
        component: SobreMiComponent
    },
    {
        path: 'pantalla-inicio',
        component: PantallaInicioComponent
    },
    {
        path: 'Portafolio',
        component: PortafolioComponent
    },
    {
        path: 'Educacion',
        component: EducacionComponent
    },
    {
        path: 'Skills',
        component: SkillsComponent
    },
    {
        path: 'Contacto',
        component: ContactMeComponent
    }
];
