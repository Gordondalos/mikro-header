import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // eslint-disable-next-line @typescript-eslint/typedef
    loadChildren: () => import('./modules/example/example.module').then((m) => m.ExampleModule),
    data: {
      menuCode: 'INVENTORY_ORDER_GOODS',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
