import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BioComponent } from './pages/bio/bio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: '**', redirectTo: '' }
];
