// data.service.ts
// Use the provided JSON file for data source ([planets.json](\assets\planets.json))
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private planetsUrl = 'assets/planets.json';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    // Check if the planets are stored in localStorage
    const storedPlanets = this.getStoredPlanets();

    if (storedPlanets) {
      // If planets are found in localStorage, return them as an observable
      return new Observable(observer => {
        observer.next(storedPlanets);
        observer.complete();
      });
    } else {
      // If planets are not found in localStorage, fetch them from the JSON file
      return this.http.get<any>(this.planetsUrl).pipe(
        tap(planets => this.storePlanets(planets)),
        catchError(this.handleError)
      );
    }
  }

  addPlanet(newPlanet: any): Observable<any> {
    return this.getPlanets().pipe(
      switchMap(planets => {
        // Assign a unique ID to the new planet
        newPlanet.planetID = planets.data.length + 1;

        // Add the new planet to the array
        planets.data.push(newPlanet);

        // Save the updated planets array to the JSON file and localStorage
        this.savePlanets(planets);
        this.storePlanets(planets);

        // Return the updated planets array
        return new Observable(observer => {
          observer.next(planets);
          observer.complete();
        });
      }),
      catchError(this.handleError)
    );
  }

  private savePlanets(planets: any): void {
    // Save the updated list of planets to the JSON file not necessary
  }

  private getStoredPlanets(): any {
    // Retrieve planets from localStorage
    const storedPlanets = localStorage.getItem('planets');

    if (storedPlanets) {
      try {
        // Parse and return the stored planets
        return JSON.parse(storedPlanets);
      } catch (error) {
        console.error('Error parsing stored planets:', error);
        return null;
      }
    }

    return null;
  }

  private storePlanets(planets: any): void {
    // Store planets in localStorage
    localStorage.setItem('planets', JSON.stringify(planets));
  }

  private handleError(error: any): Observable<never> {
    console.error('Error:', error);
    return throwError('An error occurred. Please try again.');
  }
}
