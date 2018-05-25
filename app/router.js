import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('store', function() {
    this.route('create');
    this.route('show');
    this.route('edit');
  });
});

export default Router;
