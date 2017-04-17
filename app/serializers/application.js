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

        delete payload.content;
        delete payload.size;
        delete payload.sort;
        delete payload.numberOfElements;
        delete payload.totalElements;
        delete payload.totalPages;
        delete payload.number;
        delete payload.first;
        delete payload.last;
        // const newData = payload.content.map((item) => {
        //     return {
        //         attributes: item,
        //         type: 'patient'
        //     }
        // });


        return this._super(...arguments)
    },

    keyForAttribute(key) { return key; }
});
