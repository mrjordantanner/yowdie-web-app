import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-release-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './release-card.component.html',
  styleUrl: './release-card.component.scss'
})
export class ReleaseCardComponent {
  @Input() albumArtPath: string = '';
  @Input() releaseTitle: string = '';
  @Input() releaseFormat: 'single' | 'album' = 'single';
  @Input() spotifyLink: string = '';
  @Input() appleMusicLink: string = '';
  @Input() releaseDate: string = '';

  get isReleased(): boolean {
    const releaseDate = new Date(this.releaseDate);
    const today = new Date();
    return releaseDate <= today;
  }
} 