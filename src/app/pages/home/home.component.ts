import { Component, signal, Signal, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ReleaseCardComponent } from '../../components/release-card/release-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

interface ReleaseData {
  albumArtPath: string;
  releaseTitle: string;
  releaseFormat: 'single' | 'album';
  spotifyLink: string;
  appleMusicLink: string;
  releaseDate: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardModule, ImageModule, ReleaseCardComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  upcomingReleases = signal<ReleaseData[]>([]);
  releasedTracks = signal<ReleaseData[]>([]);

  ngOnInit(): void {
    this.updateReleases();
  }

  releaseData: ReleaseData[] = [
    {
      albumArtPath: 'assets/yowdie-the-world-is-not-ending-album-art.png',
      releaseTitle: 'the world is not ending',
      releaseFormat: 'album',
      spotifyLink: 'https://open.spotify.com/artist/2RVTPV9ZxBGFLfnR2iVTi0',
      appleMusicLink: 'https://music.apple.com/us/artist/yowdie/1827714517',
      releaseDate: 'October 10, 2025'
    },
    {
      albumArtPath: 'assets/city-lights-single.jpg',
      releaseTitle: 'city lights',
      releaseFormat: 'single',
      spotifyLink: 'https://open.spotify.com/album/5mSBldg04Z5IJMEmWhVDnB',
      appleMusicLink: 'https://music.apple.com/us/album/city-lights-single/1833909671',
      releaseDate: 'August 29, 2025'
    },
    {
      albumArtPath: 'assets/4ever-single.jpg',
      releaseTitle: '4ever',
      releaseFormat: 'single',
      spotifyLink: 'https://open.spotify.com/album/77ibtOJeOU3kkvUnyna537',
      appleMusicLink: 'https://music.apple.com/us/album/4ever-single/1830951147',
      releaseDate: 'August 15, 2025'
    }
  ];

  private updateReleases(): void {
    const upcoming = this.releaseData.filter(release => !this.isReleased(release));
    const released = this.releaseData.filter(release => this.isReleased(release));
    
    this.upcomingReleases.set(upcoming);
    this.releasedTracks.set(released);
  }

  private isReleased(release: ReleaseData): boolean {
    // Parse dates like "October 10, 2025" or "August 15, 2025"
    const dateStr = release.releaseDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const releaseDate = new Date(dateStr);
    const today = new Date();
    
    // Reset time to start of day for accurate comparison
    today.setHours(0, 0, 0, 0);
    releaseDate.setHours(0, 0, 0, 0);
    
    return releaseDate <= today;
  }
}
