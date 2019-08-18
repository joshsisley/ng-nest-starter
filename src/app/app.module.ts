import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WindowService } from './services/window/window.service';

// For AoT compilation:
export function getWindow() {
  return window;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    DragulaModule.forRoot(),
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: WindowService,
      useFactory: getWindow
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
