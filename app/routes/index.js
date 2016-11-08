import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
    concerts: this.store.findAll('concert'),
    // ratings: this.store.findAll('rating'),
    });
  }
});
