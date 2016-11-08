import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('concert', params.concert_id);
},
  actions: {
    addRating(params, concert) {
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
    }
  }
});
