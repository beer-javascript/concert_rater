import Ember from 'ember';

export default Ember.Component.extend({
  currentConcert: null,
  currentRating: null,
  actions: {
    rateConcert(rating, concert) {
      this.set('currentRating', rating);
      this.set('currentConcert', concert);
    },
    addRating(params) {
      params = {
        score: this.currentRating,
        comment: this.get('comment')
      };
      var concert = this.currentConcert;
      this.sendAction('addRating', params, concert);
    }
  }
});
