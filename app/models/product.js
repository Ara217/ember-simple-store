import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    count: DS.attr('number'),
    price: DS.attr('number'),
    shop: DS.belongsTo('store')
});
