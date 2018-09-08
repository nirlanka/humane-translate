import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [], // Do not add services here: add them in forRoot()
  declarations: []
})
export class HumaneTranslateModule {
  static forRoot() {
    return {
      ngModule: HumaneTranslateModule,
      providers: []
    }
  }
}
