import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ReleaseCardComponent } from '../../components/release-card/release-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardModule, ImageModule, ReleaseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //albumArtSrc = '/assets/yowdie-the-world-is-not-ending-album-art.png';
}
