import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor, ErrorDialogModule, LockScreenModule } from '@iiko/auth';
import { BasicLayoutModule } from '@iiko/basic-layout';
import { RestoDynamicPanelModule } from '@iiko/dynamic-panel';
import { HeaderModule } from '@iiko/header';
import { LeftNavigationModule, MainNavigationModule, MenuModule } from '@iiko/menu';
import { RangeSelectorModule } from '@iiko/range-selector';
import { SelectRestoModule } from '@iiko/select-resto';
import { IIKOApiCommonModule } from '@iiko/services';

import { ProjectApiModule } from '~api/project-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    BasicLayoutModule,
    LeftNavigationModule,
    MainNavigationModule,
    MenuModule.forRoot({
      code: 'STOREOPS',
    }),
    HeaderModule,
    RangeSelectorModule,
    SelectRestoModule,
    ErrorDialogModule,
    LockScreenModule,
    IIKOApiCommonModule.forRoot({ urlPrefix: '/api' }),
    ProjectApiModule.forRoot({ urlPrefix: '' }),
    RestoDynamicPanelModule,
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
