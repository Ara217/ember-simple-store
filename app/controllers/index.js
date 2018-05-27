import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        removeStore(id){
            debugger;
            this.store.findRecord('store', id, { backgroundReload: false }).then((shop) => {
                let deletes = shop.get('products').map( product => {
                    return product.destroyRecord();
                });

                Ember.RSVP.all(deletes)
                    .then(() => {
                        return shop.destroyRecord();
                    })
                    .catch((e) => {
                        console.log(e.errors());
                    });
            })

        },

    }
});
