import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('concert', params.concert_id);
  },
  actions: {
    update(concert, params) {
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
