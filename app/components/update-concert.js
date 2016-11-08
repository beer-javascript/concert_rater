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
     this.set('updateConcertForm', false);
     this.sendAction('update', concert, params);
   }
 }
});
