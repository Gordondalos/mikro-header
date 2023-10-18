import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RESTO_PANEL_DATA, RestoPanelRef } from '@iiko/dynamic-panel';

export interface ExamplePanelParams {
  label: string;
}

@Component({
  selector: 'resto-example-panel',
  templateUrl: './example-panel.component.html',
  styleUrls: ['./example-panel.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePanelComponent {
  data!: ExamplePanelParams;

  constructor(
    private panelRef: RestoPanelRef,
    @Inject(RESTO_PANEL_DATA) data: ExamplePanelParams,
  ) {
    this.data = data;
  }

  protected readonly close = close;

  onCloseClicked(): void {
    this.panelRef.close();
  }
}
