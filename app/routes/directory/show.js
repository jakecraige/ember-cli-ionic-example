import NavBase from '../nav-base';

export default NavBase.extend({
  title: 'User',
  backButton: true,
  model: function(params) {
    return this.modelFor('directory').findBy('id', params.directory_id);
  },
  afterModel: function(model) {
    this.controllerFor('nav').set('title', model.get('name'));
  }
});
