import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h2>{{tl("Humane Translate")}}</h2>

      <p>{{tl("Easy translation mechanism with human readable string references")}}.</p>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
