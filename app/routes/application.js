import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back: function() {
      Ember.AnimatedContainerView.enqueueAnimations({nav: 'slideRight'});
      history.back();
    },

    openLink: function(url) {
      window.open(url, '_system');
    }
  }
});
