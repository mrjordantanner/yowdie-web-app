import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReleaseData {
  albumArtPath: string;
  releaseTitle: string;
  releaseFormat: 'single' | 'album';
  spotifyLink: string;
  appleMusicLink: string;
  releaseDate: string;
  canvasPath: string;
}

@Component({
  selector: 'app-release-preview-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './release-preview.modal.html',
  styleUrls: ['./release-preview.modal.scss']
})
export class ReleasePreviewModalComponent {
  @Input() releaseData: ReleaseData | null = null;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  isClosing = false;

  closeModal(): void {
    if (this.isClosing) return;
    
    this.isClosing = true;
    
    // Wait for closing animation to complete before emitting close event
    setTimeout(() => {
      this.close.emit();
      this.isClosing = false;
    }, 200); // Match the closing animation duration
  }
}
