import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: null,
  previousPage: Ember.computed('page', function() {
      return this.get('page') - 1 ? this.get('page') - 1 : null;
  }),
  nextPage: Ember.computed('page', function() {
      return parseInt(this.get('page')) + 1;
  })
});
