import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  opener: DS.attr(),
  setlist: DS.attr(),
  date: DS.attr(),
  venue: DS.attr(),
  // images: DS.attr(), //array or DS.hasMany('answer',{async: true})
  ratings: DS.hasMany('rating',{async: true}),
  ratingAverage: DS.attr() //run calculation on ratings
});
