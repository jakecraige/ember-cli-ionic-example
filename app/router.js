import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IonicENV.locationType
});

Router.map(function() {
  this.resource('directory', function() {
    this.route('show', { path: '/:directory_id' })
  });
  this.resource('events');
  this.resource('account');
});

export default Router;
