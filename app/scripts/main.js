// Require.js allows us to configure shortcut alias
require.config({
  // The shim config allows us to configure dependencies for
  // scripts that do not call define() to register a module
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    'helpers': {
      deps: [
        'handlebars'
      ],
      exports: 'Helpers'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  },
  paths: {
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/lodash.min',
    backbone: 'vendor/backbone/backbone',
    text: 'vendor/require/text',
    handlebars: 'vendor/handlebars-1.0.rc.1',
    helpers: 'vendor/handlebars-helpers'
  }
});

require([
  'views/app',
  'routers/router'
], function( AppView, Workspace ) {
  // Initialize routing and start Backbone.history()
  new Workspace();
  Backbone.history.start();

  // Initialize the application view
  new AppView();
});
