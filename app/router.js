import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('home');
  this.route('resume');
  this.route('education');
  this.route('skills');
  this.route('contact');
});

export default Router;
