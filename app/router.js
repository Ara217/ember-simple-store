import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('store', function() {
    this.route('create');
    this.route('edit', {path:'/edit/:id'});
    this.route('show', {path:'/:id'});
    this.route('product-edit', {path : '/product/edit/:id'});
    this.route('product-create', {path : '/:id/product-create'});
  });
});

export default Router;
