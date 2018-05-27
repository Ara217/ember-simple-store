import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        removeProduct(productId){
            debugger;
            this.store.findRecord('product', productId).then(function(product) {
                product.destroyRecord();
            })
        }
    }
});
