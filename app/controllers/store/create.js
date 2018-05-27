import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createStore(name) {
            let store = this.store.createRecord('store', {
                name: name
            });
            store.save().then( () => {
                this.transitionToRoute('index')
            }).catch(e => {
                console.log(e.errors);
            });
        },
    }
});
