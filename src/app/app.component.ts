import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="app">
    <nav class="nav">
      <a>
      <shopping-cart></shopping-cart>
      </a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {}
