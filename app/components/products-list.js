import Component from '@ember/component';

export default Component.extend({
    didReceiveAttrs(){
        this._super(...arguments);
        this.get('model.products')
            .then(products => {
                let total = 0;
                products.map(product=>{
                    total += product.get('price') * product.get('count');
                    this.set('totalPrice', total);
                }) })
            .catch((error) => {
                console.log(error);
            });
    },
    actions: {
        removeProduct (productId) {
            this.get('onRemove')(productId);
            return true;
        }
    }
});
