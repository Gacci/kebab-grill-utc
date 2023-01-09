// import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

import * as L from 'leaflet';

type KeyValueSet = {
    [key: string]: any
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
    protected nominatim: string = 'https://nominatim.openstreetmap.org/search?q=:q&format=json&polygon=1&addressdetails=1';

    protected map: L.Map;

    protected tiles: L.TileLayer;

    protected circle: L.Circle;

    protected marker: L.Marker;

    constructor(/*private http: HttpClient*/) { }

    /*
    search(address: string): Observable<HttpEvent<KeyValueSet[]>> {
        const url = this.nominatim.replace(':q', encodeURI(address));
        
        return this.http.get<{[key: string]: any}[]>(url, { observe: 'events' });
    }
    */

    /**
     * 
     * @param element 
     * @param coords 
     */
    config(element: HTMLElement, coords: number[]) {
        this.map = L.map(element, {
            zoom: 16, center: coords, 
            scrollWheelZoom: false
        });

        this.tiles = this.getMapTiles();
            this.tiles.addTo(this.map);
        
        this.marker = this.getMapMarker(coords);
            this.marker.addTo(this.map);

        this.circle = this.getMapCircle(coords);
            this.circle.addTo(this.map);
    }

    /**
     * 
     * @returns 
     */
    getMapTiles() {
        // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        // https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png
        return L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; 
            <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; 
            <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
            maxZoom: 16,
            minZoom: 3
        });

        
    }

    /**
     * 
     * @param coords 
     * @returns 
     */
    getMapMarker(coords: number[]){
        const icon = new L.icon({
            iconUrl: 'marker-icon.png',
            iconSize: [26, 36],
            iconAnchor: [2, 2],
            popupAnchor: [0, -2]
        });

        return L.marker(coords, { icon: icon });
    }

    /**
     * 
     * @param coords 
     * @returns 
     */
    getMapCircle(coords: number[]) {
        return L.circle(coords, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.25,
            radius: 200
        });
    }

    /**
     * 
     * @param lat 
     * @param lon 
     */
    setLocationView(lat: number, lon: number) {
        const coords = L.latLng(lat, lon);

        this.map.panTo(coords);
        this.circle.setLatLng(coords);
        this.marker.setLatLng(coords);
    }
}
