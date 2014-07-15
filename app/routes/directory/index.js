import NavBase from '../nav-base';

export default NavBase.extend({
  title: 'Directory',
  model: function() {
    return this.modelFor('directory');
  },
  actions: {
    show: function(model) {
      this.transitionToAnimated('directory.show', {
        nav: 'slideLeft'
      }, model);
    }
  }
});
