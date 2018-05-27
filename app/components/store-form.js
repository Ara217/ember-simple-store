import Component from '@ember/component';

export default Component.extend({
    actions: {
        createStore(name) {
            debugger;
            if(!name) {
                this.set('isError', true);
            } else {
                this.get('addStore')(name);
            }
        },

        updateStore(name, id){
            debugger;
            if(!name) {
                this.set('isError', true);
            } else {
                this.get('editStore')((name, id));
            }
        },
    }
});
