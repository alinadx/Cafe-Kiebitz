# CafeKiebitz

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Theming

The app uses an Angular Material 3 (M3) theme generated from the café's brand
colors. The tonal palettes live in [`src/styles/_theme-colors.scss`](src/styles/_theme-colors.scss)
and were produced with:

```bash
ng generate @angular/material:theme-color \
  --primary-color="#263524" \   # forest green (headings + CTA)
  --secondary-color="#b27641" \ # earth brown
  --tertiary-color="#8f5f32" \  # deep brunch brown
  --neutral-color="#6a6054"     # muted warm grey (surfaces)
```

The theme is applied via `mat.theme()` in [`src/styles.scss`](src/styles.scss),
which exposes `--mat-sys-*` system variables. Components consume those variables
as the single source of truth for color (see the landing page and menu category
SCSS) rather than hardcoding hex values.

To regenerate the palette after a brand color change, re-run the schematic above
(it overwrites `_theme-colors.scss` with `--force`).

### TODOs

- [ ] Generate a high-contrast theme variant for accessibility
      (`ng generate @angular/material:theme-color ... --include-high-contrast`)
      and wire up the high-contrast override mixins.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
