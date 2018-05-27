import Component from '@ember/component';

export default Component.extend({
    actions: {
        createProduct(name, count, price, storeId) {
            this.set('errors', {});
            if (!name) {
                this.get('errors').name = { message: 'Name is required'};
            }
            if (!count) {
                this.get('errors').count = { message: 'Count is required' };
            } else if(isNaN(parseFloat(count)) || !isFinite(count)) {
                this.get('errors').countNaN =  { message: 'Count should by numeric'};
            }
            if (!price) {
                this.get('errors').price = { message: 'Price is required' };
            } else if(isNaN(parseFloat(price)) || !isFinite(price)) {
                this.get('errors').priceNaN = { message: 'Price should by numeric'};
            }
            if(Object.keys(this.get('errors')).length == 0) {
                this.get('addProduct')(name, count, price, storeId);
            }
        },

        updateProduct(name, count, price, productId, storeId){
            this.set('errors', {});
            if (!name) {
                this.get('errors').name = { message: 'Name is required'};
            }
            if (!count) {
                this.get('errors').count = { message: 'Count is required' };
            } else if(isNaN(parseFloat(count)) || !isFinite(count)) {
                this.get('errors').countNaN =  { message: 'Count should by numeric'};
            }
            if (!price) {
                this.get('errors').price = { message: 'Price is required' };
            } else if(isNaN(parseFloat(price)) || !isFinite(price)) {
                this.get('errors').priceNaN = { message: 'Price should by numeric'};
            }
            if(Object.keys(this.get('errors')).length == 0) {
                this.get('onUpdate')(name, count, price, productId, storeId);
            }
        }
    }
});
