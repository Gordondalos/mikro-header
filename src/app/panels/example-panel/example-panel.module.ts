import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RestoDynamicPanelModule } from '@iiko/dynamic-panel';

import { ExamplePanelComponent } from './example-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    RestoDynamicPanelModule,
  ],
  declarations: [ExamplePanelComponent],
  exports: [ExamplePanelComponent],
})
export class ExamplePanelModule {}
