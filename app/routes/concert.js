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
      var allRatings = this.store.findAll('rating').length;
      var newRating = this.store.createRecord('rating', params);
      concert.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return concert.save();
      });
      this.transitionTo('concert');
      // console.log(concert.id);
      console.log(allRatings.length);
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
      concert.destroyRecord();
      this.transitionTo('index');
    }
  }
});
