import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { icon, map, marker, tileLayer } from 'leaflet';

const CAFE_POSITION: [number, number] = [50.7856652, 6.0777284];

@Component({
  selector: 'app-location-map',
  template: `
    <div
      #mapContainer
      class="map"
      role="region"
      aria-label="Karte mit dem Standort des Café Kiebitz"
    ></div>
  `,
  styles: `
    .map {
      height: 260px;
      width: 100%;
      border-radius: 0.9rem;
    }
  `,
})
export class LocationMap {
  private readonly mapContainer = viewChild.required<ElementRef<HTMLElement>>('mapContainer');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const leafletMap = map(this.mapContainer().nativeElement).setView(CAFE_POSITION, 16);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(leafletMap);

      const markerIcon = icon({
        iconUrl: 'assets/images/map_marker.svg',
        iconSize: [51, 84],
        iconAnchor: [25, 84],
        popupAnchor: [0, -84],
      });

      marker(CAFE_POSITION, { icon: markerIcon, alt: 'Café Kiebitz', title: 'Café Kiebitz' })
        .addTo(leafletMap)
        .bindPopup('Café Kiebitz');

      destroyRef.onDestroy(() => leafletMap.remove());
    });
  }
}
