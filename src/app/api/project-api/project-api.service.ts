import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ApiBase, BaseApiConfig, DataDTO } from '@iiko/services';
import { map, Observable } from 'rxjs';

import { ExampleInterface } from '~api/project-api/model';

import { PROJECT_API_CONFIG_TOKEN } from './token';

@Injectable()
export class ProjectApiService extends ApiBase {
  constructor(http: HttpClient, @Inject(PROJECT_API_CONFIG_TOKEN) apiConfig: BaseApiConfig) {
    super(http, apiConfig);
  }

  /**
   * example get
   */
  getActiveOrderList(): Observable<ExampleInterface[]> {
    return this.get<DataDTO<ExampleInterface[]>>(`order/list_active`)
               .pipe(map((resp: DataDTO<ExampleInterface[]>) => resp.data as ExampleInterface[]));
  }

  /**
   * example post
   */
  getProductForecast(params: { orderId: number; productIds: string[] }): Observable<ExampleInterface[]> {
    return this.post<DataDTO<ExampleInterface[]>>(`forecast/by-order-products`, params)
               .pipe(map((resp: DataDTO<ExampleInterface[]>) => resp.data as ExampleInterface[]));
  }
}
