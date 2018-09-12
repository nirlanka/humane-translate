import { Component } from '@angular/core';

import { TranslateService } from './humane-translate/translate.service';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h2>{{t.l("Humane Translate")}}</h2>

      <p>{{t.l("Easy translation mechanism with human readable string references")}}.</p>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = this.t.l("Humane Translate");
  
  constructor(
    public t: TranslateService
  ) {
  }
}
