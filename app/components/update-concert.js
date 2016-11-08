import Ember from 'ember';

export default Ember.Component.extend({
  updateConcertForm: false,
 actions: {
   updateConcertForm() {
     this.set('updateConcertForm', true);
   },
   update(concert) {
     var params = {
       artist: this.get('artist'),
       opener: this.get('opener'),
       date: this.get('date'),
       venue: this.get('venue'),
     };
     if (!params.artist || !params.opener || !params.date || !params.venue) {
        alert('please fill all fields');
    } else {
     this.set('updateConcertForm', false);
     this.sendAction('update', concert, params);
      }
    }
  }
});
