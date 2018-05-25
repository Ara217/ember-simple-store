import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('name'),
  products: DS.hasMany('product',{ async: true })
});