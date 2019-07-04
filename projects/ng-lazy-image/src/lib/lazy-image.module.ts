import { NgModule } from '@angular/core';

import { LazyImageDirective } from './lazy-image.directive';

@NgModule({
  declarations: [LazyImageDirective],
  exports: [LazyImageDirective]
})
export class LazyImageModule {}
