// planets.component.ts
/**
 * This component displays a page with a data table about the planets
 * Data is retrieved from a provided JSON file and displayed in the following columns:
 *
 * | Planet ID | Planet Name | Distance | Mass | Radius | Inclination | Gravity |
 *
 * Key features of this component include:
 *
 * - Column names are not hard-coded in the template
 * - Gravity value is calculated from information in the JSON file using the formula: G * M / R^2,
 *   where G is the gravitational constant, M is the planet's mass, and R is the planet's radius.
 * - Data can be sorted by any column by clicking on the header.
 * - The table can be searched by entering a keyword in the global search field.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  @ViewChild('dt1') dt1!: Table;

  columns: any[] = [
    { field: 'planetID', header: 'Planet ID' },
    { field: 'planetName', header: 'Planet Name' },
    { field: 'distance', header: 'Distance' },
    { field: 'mass', header: 'Mass' },
    { field: 'radius', header: 'Radius' },
    { field: 'inclination', header: 'Inclination' },
    { field: 'gravity', header: 'Gravity' },
  ];
  filters: any[] = this.columns.map((col) => col.field);
  planets: any[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPlanets().subscribe((data: any) => {
      this.planets = data.data.map((planet: any) => {
        const gravity = this.calculateGravity(planet);
        return { ...planet, gravity };
      });
      this.loading = false;
    });
  }

  filterData(event: any) {
    const value = (event.target as HTMLInputElement).value;
    this.dt1.filterGlobal(value, 'contains');
  }

  calculateGravity(planet: any): number {
    const G = 6.6743e-11;
    const massOfPlanet = planet.mass;
    const radiusOfPlanet = planet.radius;

    const gravity = (G * massOfPlanet) / Math.pow(radiusOfPlanet, 2);

    return gravity;
  }

  clear(table: Table) {
    table.clear();
  }
}
