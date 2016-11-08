import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr(),
  comment: DS.attr(),
  concert: DS.belongsTo('concert', {async: true})
});
