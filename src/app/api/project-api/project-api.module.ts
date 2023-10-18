import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { BaseApiConfig } from '@iiko/services';

import { ProjectApiService } from './project-api.service';
import { PROJECT_API_CONFIG_TOKEN } from './token';

/**
 * Create provider for api config
 */
export function provideConfig(config: BaseApiConfig): Provider {
  return {
    provide: PROJECT_API_CONFIG_TOKEN,
    useValue: config,
  };
}

@NgModule()
export class ProjectApiModule {
  /**
   * Return module with needed settings
   */
  static forRoot(config: BaseApiConfig): ModuleWithProviders<ProjectApiModule> {
    return {
      ngModule: ProjectApiModule,
      providers: [ProjectApiService, provideConfig(config)],
    };
  }
}
