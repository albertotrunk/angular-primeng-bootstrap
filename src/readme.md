# Prerequisites
- Use Angular 16.x+
- Use UTF-8 character encoding
- Use the provided JSON file for data source ([planets.json](\assets\planets.json))
- You may use the PrimeNG library ([PrimeNG](https://primefaces.org/primeng/))
- You may use Bootstrap 5.x ([Bootstrap](https://getbootstrap.com/))
- The application must be a Single Page Application
- Source code can be developed locally and pushed to a GIT repository (e.g.: GitHub)
- Access to all project commits should be granted
- If the repository is not public, a username and password must be provided

# Application Requirements
1. The application should be self-contained, without requiring access to any backend.
2. The only external data provider allowed is the provided JSON file.
3. The application must have a login page with mock validation where
   a. It returns an error if the username and password are not valid.
   b. It directs the user to the "welcome" page if the login is successful.
4. The Welcome page must contain links to the following pages:
   a. New Planet
   b. Planets

   Please note that links should not be implemented via direct HTML hardcode but with routing. The links may be presented in a toolbar.

5. The "New Planet" page must have a form with the following information:

   | Form field             | Type    | Is required |
      |------------------------|---------|-----------|-------------|
   | Planet ID              | Integer | Created auto|
   | Planet Name            | String  | Yes         |
   | Distance in m          | Number  | Yes         |
   | Mass in kg             | Number  | Yes         |
   | Radius in m            | Number  | Yes         |
   | Inclination of orbit   | Number  | Yes         |

   The form should validate for correct content and mandatory fields. For example, the planet name should be a non-empty string, the distance, mass, radius, and inclination should be positive numbers, and all the fields should be filled. You can use the Angular Validators module to create custom validators for your form.

   Submit and clear buttons must be available. The submit button should add the new planet to the data table in the "Planets" page, and the clear button should reset the form fields to their initial values.

6. The "Planets" page should display a data grid with the following header:

   | Planet ID | Planet Name | Distance | Mass | Radius | Inclination | Gravity (calculated as not included in the json) |

   a. Information to populate the grid should be retrieved from the provided JSON file.
   b. Column names should not be hardcoded in the template but retrieved from the provided JSON file.
   c. Gravity value is calculated from the information retrieved from the JSON file.
   d. The data should be sortable per column.
   e. The table should be searchable (simple global search).

7. As an improvement, the data entered in the "New Planet" form could be added to the data table (in runtime, not on a permanent basis), and the grid should provide a way to enter data for the new planet, as well as edit the data already displayed. There is no need to save changes to the information.
