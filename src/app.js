
import { inject } from 'aurelia-framework'; // to inject the httpclient 
import { HttpClient } from 'aurelia-fetch-client';// used to send a post request to the node server

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';

    // This step will execute whenever auth is set to true in a specific route
    // AuthorizeStep is the class that will be executed
    config.addAuthorizeStep(AuthorizeStep)

    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
      { route: 'users', name: 'users', moduleId: './users', nav: true, title: 'Github Users', auth: true },
      { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}

// This class will determine the authentication status of the user
@inject(HttpClient)
export class AuthorizeStep {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  // built in functionality for the router
  run(navigationInstruction, next) {

    //checks the current route to see if it needs authentication
    if (navigationInstruction.getAllInstructions().some(route => route.config.auth === true)) {
            
      return next();
    }

    // this moves on the next router step if there is no authentication needed
    return next();

  }
}
