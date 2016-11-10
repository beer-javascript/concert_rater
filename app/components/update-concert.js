import Ember from 'ember';

export default Ember.Component.extend({
  updateConcertForm: false,
  actions: {
   updateConcertForm() {
     this.set('updateConcertForm', true);
   },
   update(concert) {
     var params = {
       artist: concert.get('artist'),
       opener: concert.get('opener'),
       date: concert.get('date'),
       venue: concert.get('venue'),
     };
     console.log(params.artist);

     if (!params.artist || !params.opener || !params.date || !params.venue) {
        alert('please fill all fields');
    } else {
     this.set('updateConcertForm', false);
     this.sendAction('update', concert, params);
      }
    }
  }
});
