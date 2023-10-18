import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(AppModule).then(moduleRef => {
  const injector = moduleRef.injector;

  // Создаем веб-компонент из AppComponent
  const webComponent = createCustomElement(AppComponent, { injector });

  // Регистрируем веб-компонент
  customElements.define('micro-header', webComponent);
}).catch(error => console.error(error));
