// new-planet.component.ts
/**
 * This component displays a page with a form to enter data for a new planet and add it to the data table on the "Planets" page.
 * The form includes the following fields:
 *
 * | Form field             | Type    | Is required |
 * |------------------------|---------|-------------|
 * | Planet Name            | String  | Yes         |
 * | Distance in m          | Number  | Yes         |
 * | Mass in kg             | Number  | Yes         |
 * | Radius in m            | Number  | Yes         |
 * | Inclination of orbit   | Number  | Yes         |
 *
 * Features of this component:
 *
 * - The form validates content and mandatory fields.
 * - The form has two buttons: Submit and Clear.
 * - The Submit button adds the new planet to the data table on the "Planets" page, and the Clear button resets the form.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-planet',
  templateUrl: './new-planet.component.html',
  styleUrls: ['./new-planet.component.scss'],
})
export class NewPlanetComponent implements OnInit {
  planetForm!: FormGroup;
  errorMessage: string = '';
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.planetForm = this.fb.group({
      planetName: [null, [Validators.required, Validators.maxLength(20)]],
      distance: [null, [Validators.required]],
      mass: [null, [Validators.required]],
      radius: [null, [Validators.required]],
      inclination: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submitted = true; // Set the submitted flag to true
    if (this.planetForm.valid) {
      // Save the planet using DataService
      this.dataService.addPlanet(this.planetForm.value).subscribe(
        (planets) => {
          // Reset the form after saving
          this.initForm();
          this.submitted = false; // Set the submitted flag to false
          // Redirect to /planets
          this.router.navigate(['/planets']);
        },
        (error) => {
          console.error('Error saving planet:', error);
          this.errorMessage = 'An error occurred while saving the planet. Please try again.';
        }
      );
    }
  }

  clearForm(): void {
    this.initForm();
    this.errorMessage = '';
    this.submitted = false;
  }
}
