import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateProduct(name, count, price, productId, storeId){
            this.store.findRecord('product', productId)
                .then(product => {
                    product.set('name',name);
                    product.set('count',count);
                    product.set('price',price);
                    product.save().then(() => {
                        this.transitionToRoute('store.show',storeId)
                    })
                })
        }
    }
});
