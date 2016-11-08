import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveConcert() {
      var params = {
        artist: this.get('artist'),
        opener: this.get('opener'),
        setlist: null, //fix this later
        date: this.get('date'),
        venue: this.get('venue'),
        ratingAverage: null
      };
      if (!params.artist || !params.opener || !params.date || !params.venue) {
        alert('please fill all fields');
      } else {
        this.sendAction('saveConcert', params);
        this.set('artist','');
        this.set('opener','');
        this.set('date','');
        this.set('venue','');
      }
    }
  }
});
