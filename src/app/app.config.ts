import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
    routes, //Array of route configurations
    withHashLocation(),
    //Function enables hash-based location strategy, which uses the hash in the URL to represent different routes
    withViewTransitions(),
    //Function enables view transitions, providing smooth animations between routes
    withInMemoryScrolling()
    //Function enables in-memory scrolling, which preserves scroll positions when navigating between routes within the same application
  ),

  provideHttpClient(withFetch()),
  //Provides the HttpClient service for making HTTP requests to external APIs.
  //<withFetch()>: This function is used to configure the HttpClient to use the fetch API for making HTTP requests.

  importProvidersFrom(BrowserAnimationsModule)
  //Module provides browser-specific animations for Angular components.
]
};