import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.interview.healthforge.io',
    namespace: 'api',
    pathForType: function(modelName) {
        return modelName;
    },
    headers: {
        "accept": "application/json"
    }
});
