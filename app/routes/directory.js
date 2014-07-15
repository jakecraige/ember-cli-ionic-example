import Ember from 'ember';
import NavBase from './nav-base';

export default NavBase.extend({
  title: 'Directory',
  model: function() {
    return this.store.find('user');
  }
});
