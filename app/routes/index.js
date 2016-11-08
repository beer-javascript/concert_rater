import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
    concerts: this.store.findAll('concert'),
    // ratings: this.store.findAll('rating'),
    });
  },
  actions: {
    saveConcert(params) {
      var newConcert = this.store.createRecord('concert', params);
      newConcert.save();
      this.transitionTo('index');
    },
    addAnswer(question, params) {
      var newAnswer = this.store.createRecord('answer', params);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
      return question.save();
  });
  this.transitionTo('index');
  }
}
});
