import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
    { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.Projects) },
    { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
    { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
    { path: '**', redirectTo: '/home' }
];
