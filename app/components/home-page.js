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
      }; //add empty field checking?
      console.log(1)
      this.sendAction('saveConcert', params);
      this.set('artist',''),
      this.set('opener',''),
      this.set('date',''),
      this.set('venue','')
    }
  }
});
