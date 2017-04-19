import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id) {

        payload.data = payload.content;

        payload.data = payload.data.map((patient, index) => {
            return {
                type: 'patient',
                id: index + 1,
                attributes: {
                    firstName: patient.firstName,
                    lastName: patient.lastName,
                    dateOfBirth: patient.dateOfBirth
                }
            }
        });


        return this._super(...arguments)
    },

    keyForAttribute(key) { return key; }
});
