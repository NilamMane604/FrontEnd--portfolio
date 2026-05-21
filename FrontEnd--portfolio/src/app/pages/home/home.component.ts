




import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutComponent } from '../../sections/about/about.component';

import { Footer } from 'primeng/api';

import { FooterComponent } from '../../components/footer/footer.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { ProjectComponent } from '../../sections/project/project.component';
import { SkillComponent } from '../../sections/skill/skill.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,AboutComponent,FooterComponent,ContactComponent,ProjectComponent,SkillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
