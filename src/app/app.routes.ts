import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'reservation',
    loadComponent: () => import('./pages/reservation/reservation').then((m) => m.Reservation),
  },
  {
    path: 'reservation-successful',
    loadComponent: () =>
      import('./pages/reservation-successful/reservation-successful').then(
        (m) => m.ReservationSuccessful,
      ),
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint').then((m) => m.Imprint),
  },
  {
    path: 'data-protection',
    loadComponent: () =>
      import('./pages/data-protection/data-protection').then((m) => m.DataProtection),
  },
  {
    path: 'error',
    loadComponent: () => import('./pages/error/error').then((m) => m.ErrorPage),
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];
