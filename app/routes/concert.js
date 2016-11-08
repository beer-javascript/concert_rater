import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('concert', params.concert);
},
  actions: {
    addRating(params, concert) {
      var newRating = this.store.createRecord('rating', params);
      concert.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return concert.save();
      });
      this.transitionTo('concert');
    }
  }
});
