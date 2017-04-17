import Ember from 'ember';

export default Ember.Component.extend({
    sortedPatients: Ember.computed.sort('patients', 'sortField'),
    sortBy: 'lastName',
    sortField: Ember.computed('sortBy', function() {
        return [ this.get('sortBy') ];
    }),
    actions: {
        setSort(sortBy) {
            if (this.get('sortBy') === sortBy) {
                sortBy = sortBy + ':desc';
            }
            return this.set('sortBy', sortBy);
        }
    }
});
