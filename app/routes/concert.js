import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      concert: this.store.findRecord('concert', params.concert_id),
      ratings: this.store.findAll('rating')
    });
  },
  actions: {
    addRating(params, concert) {
      // console.log(concert.get('artist'));
      var newRating = this.store.createRecord('rating', params);
      concert.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return concert.save();
      });
      this.transitionTo('concert');
  },
    update(concert, params) {
      console.log(concert);
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          concert.set(key,params[key]);
        }
      });
      concert.save();
      this.transitionTo('index');
    },
    destroyConcert(concert) {
      var rating_deletions = concert.get('ratings').map(function(review) {
        return rating.destroyRecord();
      });
      Ember.RSVP.all(rating_deletions).then(function() {
        return concert.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyRating(rating) {
      rating.destroyRecord();
      this.transitionTo('index')
    }
  }
});
