import DS from 'ember-data';

var ENV = IonicENV;

export default DS.ActiveModelAdapter.extend({
  host: ENV.apiUrl
});
