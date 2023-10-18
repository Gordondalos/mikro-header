import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExamplePipe } from './example-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ExamplePipe],
  exports: [ExamplePipe],
})
export class ExamplePipeModule {}
