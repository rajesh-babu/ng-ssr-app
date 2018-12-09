import { NgModule, Injector, PLATFORM_ID, Inject } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { isPlatformBrowser } from '@angular/common';

declare var require: any;

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(private injector: Injector, @Inject(PLATFORM_ID) platformId: Object) {

    if (isPlatformBrowser(platformId)) {
     // const { createCustomElement } = require('@angular/elements');
      // you can use createCustomElement here
     // const homeElement = createCustomElement(HomeComponent, { injector });

      //customElements.define('home-comp', homeElement);
    }

  }

  ngDoBootstrap() { }
}
