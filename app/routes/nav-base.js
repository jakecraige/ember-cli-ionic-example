import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var navCtrl = this.controllerFor('nav');
    if (this.get('title')) {
      navCtrl.set('title', this.get('title'));
    }

    if (!Ember.isBlank(this.get('backButton'))) {
      navCtrl.set('backButton', this.get('backButton'));
    }
  },

  resetNav: function() {
    var navCtrl = this.controllerFor('nav');

    navCtrl.setProperties({
      backButton: false
    });

  },

  actions: {
    willTransition: function() {
      this.resetNav();
    }
  }
});
