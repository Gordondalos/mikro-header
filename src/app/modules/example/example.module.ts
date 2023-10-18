import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ExampleComponent } from "./example.component";

@NgModule({
  declarations: [ExampleComponent],
  imports: [RouterModule.forChild([{
    path: '',
    component: ExampleComponent,
  }])],
  exports: [ExampleComponent],
})
export class ExampleModule {}
