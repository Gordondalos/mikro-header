import { InjectionToken } from '@angular/core';
import { BaseApiConfig } from '@iiko/services';

export const PROJECT_API_CONFIG_TOKEN = new InjectionToken<BaseApiConfig>('project-api-config');
