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
      // console.log(concert.get('artist'));
      this.sendAction('addRating', params, concert);
    },
    delete(concert){
      if (confirm('Are you sure you want to delete this concert?')) {
        this.sendAction('destroyConcert', concert);
      }
    },
    delete(rating) {
      if (confirm('Are you sure you want to delete this rating?')) {
        this.sendAction('destroyRating', rating);
      }
    }
    destroyRating(rating) {
      this.sendAction('destroyRating', rating);
    }
  }
});
