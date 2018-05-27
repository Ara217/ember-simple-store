import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        updateStore(name, id) {
            debugger;
            this.get('store').findRecord('store', id)
                .then(store => {
                    store.set('name', name);
                    store.save().then(() => {
                        this.transitionToRoute('index')
                    })
                }).catch(e => {
                console.log(e.errors);
            });
        }
    }
});
