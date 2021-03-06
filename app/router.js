import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('patients', function() {
        this.route('show', { path: '/:patient_id' });
    });
});

export default Router;
