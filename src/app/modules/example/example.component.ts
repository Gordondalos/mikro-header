import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RestoDynamicPanelService } from '@iiko/dynamic-panel';

import { ExamplePanelComponent, ExamplePanelParams } from "~panels/example-panel";

@Component({
  selector: 'resto-example',
  templateUrl: 'example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {

  constructor(private dynamicPanelService: RestoDynamicPanelService) {}

  openExamplePanel(): void {
    this.dynamicPanelService.openPanel<unknown, ExamplePanelParams>(ExamplePanelComponent, {
      width: '450px',
      data: { label: 'Some label' }
    });
  }
}
