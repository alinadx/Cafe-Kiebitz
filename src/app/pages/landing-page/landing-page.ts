import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuCategory, MenuItem } from '../../components/menu-category/menu-category';
import { LocationMap } from '../../components/location-map/location-map';

@Component({
  selector: 'app-landing-page',
  imports: [NgOptimizedImage, RouterLink, MenuCategory, LocationMap],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  // Menu copy and prices transcribed from MobileDesign.pdf.
  protected readonly salate: readonly MenuItem[] = [
    {
      name: 'Großer gemischter Salat',
      price: '9,20 €',
      note: 'wahlweise mit hausgemachtem Balsamico- oder Cocktail-Dressing',
    },
    { name: 'Hausgemachter Krautsalat', price: '6,00 €', note: 'nach Omas Rezept' },
    { name: 'Hausgemachter Kartoffelsalat', price: '6,50 €' },
  ];

  protected readonly warmeKleingerichte: readonly MenuItem[] = [
    { name: 'Bio-Bockwurst mit hausgemachtem Kartoffelsalat', price: '9,20 €' },
    { name: 'Bio-Bockwurst mit Brot', price: '6,00 €' },
    { name: 'Hausgemachte Kartoffelcremesuppe', price: '4,00 €' },
    { name: 'mit Bio-Bockwurst', price: '6,00 €' },
    { name: 'mit Räucherlachs', price: '6,20 €' },
  ];

  protected readonly kuchen: readonly MenuItem[] = [
    { name: 'Obstkuchen', price: '3,10 €' },
    { name: 'Sahnetorte', price: '3,70 €' },
    { name: 'Portion Sahne', price: '0,70 €' },
  ];

  protected readonly heissgetraenke: readonly MenuItem[] = [
    { name: 'Kaffee oder Tee – Tasse', price: '2,20 €' },
    { name: 'Kaffee oder Tee – Kännchen', price: '4,20 €' },
    { name: 'Espresso', price: '2,20 €' },
    { name: 'Cappuccino', price: '3,00 €' },
    { name: 'Latte Macchiato', price: '3,00 €' },
    { name: 'Tasse Kakao', price: '2,80 €' },
    { name: 'Tasse Kakao mit Sahne', price: '3,50 €' },
    { name: 'Frischer Minztee', price: '3,20 €' },
  ];

  protected readonly alkoholfreieGetraenke: readonly MenuItem[] = [
    { name: 'Fritz-kola', volume: '0,33 l', price: '2,40 €' },
    { name: 'Fritz-kola ohne Zucker', volume: '0,33 l', price: '2,40 €' },
    { name: 'Fritz-limo orange', volume: '0,33 l', price: '2,40 €' },
    { name: 'Fritz-limo zitrone', volume: '0,33 l', price: '2,40 €' },
    { name: 'Schweppes Bitter-Lemon', volume: '0,33 l', price: '3,50 €' },
    { name: 'Wasser', volume: '0,33 l', price: '2,60 €', note: 'laut oder leise' },
    { name: 'Saisonale Säfte', volume: '0,25 l', price: '2,80 €', note: 'aus der Region' },
    { name: 'Saft-Schorle', volume: '0,25 l', price: '2,70 €', note: 'aus der Region' },
  ];

  protected readonly weine: readonly MenuItem[] = [
    { name: 'Riesling', volume: '0,25 l', price: '5,20 €', note: 'trocken' },
    { name: 'Grauburgunder', volume: '0,25 l', price: '5,40 €', note: 'trocken' },
    { name: 'Weißwein-Schorle', volume: '0,25 l', price: '3,80 €' },
    { name: 'Dornfelder', volume: '0,25 l', price: '5,20 €', note: 'trocken' },
  ];

  protected readonly biere: readonly MenuItem[] = [
    { name: 'Krombacher Pils', volume: '0,33 l', price: '2,90 €' },
    { name: 'Radler', volume: '0,33 l', price: '2,90 €', note: '50% Limonaden-Anteil' },
    { name: 'Krombacher', volume: '0,33 l', price: '2,90 €', note: 'alkoholfrei' },
    {
      name: 'Franziskaner Hefeweizen',
      volume: '0,50 l',
      price: '4,50 €',
      note: 'hell, dunkel, alkoholfrei',
    },
  ];

  protected readonly milchOptionen: readonly MenuItem[] = [];
}
