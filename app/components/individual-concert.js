import Ember from 'ember';

export default Ember.Component.extend({
  currentConcert: null,
  currentRating: null,
  actions: {
    rateConcert(rating, concert) {
      debugger;
      this.set('currentRating', rating);
      this.set('currentConcert', concert);
    },
    addRating(params) {
      params = {
        score: this.currentRating,
        comment: this.get('comment')
      };
      var concert = this.currentConcert;
      if (!params.score || !params.comment) {
        alert('please leave both score and a comment');
      } else {
        this.sendAction('addRating', params, concert);
        this.set('currentRating', null);
        console.log(params.score);
      }
    },
    destroyConcert(concert){
      if (confirm('Are you sure you want to delete this concert?')) {
        this.sendAction('destroyConcert', concert);
      }
    },
    destroyRating(rating) {
      if (confirm('Are you sure you want to delete this rating?')) {
        this.sendAction('destroyRating', rating);
      }
    },
    update(concert, params) {
      this.sendAction('update', concert, params);
    },
  }
});
