import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | store/product-create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:store/product-create');
    assert.ok(route);
  });
});
