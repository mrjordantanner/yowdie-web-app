import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  url: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  menuItems: MenuItem[] = [
    { label: 'releases', url: '/', disabled: false },
    { label: 'merch', url: '/merch', disabled: true },
    { label: 'bio', url: '/bio', disabled: true },
    { label: 'contact', url: 'mailto:jordan@yowdie.com', disabled: false }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
