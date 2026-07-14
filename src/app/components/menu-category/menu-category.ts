import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface MenuItem {
  name: string;
  price?: string;
  volume?: string; // e.g. "0,33 l"
  note?: string; // e.g. "trocken", "aus der Region"
}

@Component({
  selector: 'app-menu-category',
  imports: [NgOptimizedImage],
  templateUrl: './menu-category.html',
  styleUrl: './menu-category.scss',
})
export class MenuCategory {
  readonly icon = input.required<string>();
  readonly iconWidth = input.required<number>();
  readonly iconHeight = input.required<number>();
  readonly title = input.required<string>();
  readonly items = input.required<readonly MenuItem[]>();
  readonly description = input<string>();
}
