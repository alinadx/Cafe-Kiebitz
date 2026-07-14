# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for Café Kiebitz (a German café), built with Angular 22. The
entire app is one route (`LangingPage`, note the typo — it's the actual class/folder
name, not a mistake to "fix") that renders a landing page assembled from repeated
`MenuCategory` components for the food/drink menu sections.

## Commands

```bash
npm start          # ng serve, http://localhost:4200
npm run build      # ng build (production by default)
npm run watch      # ng build --watch --configuration development
npm test           # ng test (Vitest runner)
```

Run a single test file/suite with Vitest's own filters, e.g.:
```bash
npx vitest run --project=cafe-kiebitz -t "should create"
```

There is no linter configured; `.prettierrc` + `.editorconfig` define formatting only
(no lint script in package.json).

## Architecture

- `src/app/app.ts` / `app.html` — root shell: Material toolbar + sidenav (mode `push`,
  not `side`) with the nav links, wraps `<router-outlet>`.
- `src/app/app.routes.ts` — single route to `LangingPage`; everything else redirects to `''`.
- `src/app/components/langing-page/` — the landing page. Its `.ts` file hardcodes all
  menu data (arrays of `MenuItem`) transcribed from the design PDF, passed into repeated
  `<app-menu-category>` instances in the template.
- `src/app/components/menu-category/` — dumb/presentational component: takes an icon,
  title, optional description, and `MenuItem[]` and renders one menu section. `MenuItem`
  (`name`, optional `price`/`volume`/`note`) is defined here and reused by the landing page.

## Design source of truth

`design/MobileDesign.pdf` is the canonical mobile mockup (Figma export) for copy, layout,
type scale, and colors. `design/extract_spec.py` (run via `design/.venv/bin/python
design/extract_spec.py`) parses that PDF into `design/spec/` — rendered page sections,
sampled colors, font-size buckets, vector fills, and extracted images — as a reference
for matching the design pixel/color-for-pixel. `design/spec/` is regenerated output
(gitignored) and disposable; re-run the script instead of hand-editing it.

**Do not change visible text copy** in templates — it's transcribed verbatim from the
PDF (including German umlauts) and must stay in sync with the design source. Text-only
changes need explicit confirmation; styling/structure/attributes are fair game.

## Theming

Material 3 theme generated from the café's brand colors (forest green primary, earth
brown secondary/tertiary, warm grey neutral). The tonal palette lives in
`src/styles/_theme-colors.scss`, generated via `ng generate
@angular/material:theme-color` (see README for the exact flags) and applied through
`mat.theme()` in `src/styles.scss`, which exposes `--mat-sys-*` custom properties.
Components must consume those `--mat-sys-*` variables rather than hardcoding hex colors.
Re-run the schematic (it overwrites the file with `--force`) after any brand color change
instead of hand-editing the generated palette.

A high-contrast theme variant is planned but not yet implemented (see README TODOs).

## Coding Conventions

You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

### TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

### Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Prefer inline templates for small components
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

### State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

### Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available

### Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection

### Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.
