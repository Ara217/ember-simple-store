import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addProduct(name, count, price, storeId) {
            debugger;
            let product = this.store.createRecord('product', {
                name: name,
                count: count,
                price: price,
            });

            this.store.findRecord('store', storeId).then(store => {
                store.get('products').addObject(product);
                product.save().then(() => {
                    store.save().then(() => {
                        this.transitionToRoute('store.show',storeId)
                    })
                });
            });
        }
    }
});
