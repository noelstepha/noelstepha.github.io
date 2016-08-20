import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('home');
  this.route('resume');
  this.route('resume', { path: '#resume' });
  this.route('education');
  this.route('education', { path: '#education' });
  this.route('skills');
  this.route('skills', { path: '#skills' });
  this.route('contact');
  this.route('contact', { path: '#contact' });
});

export default Router;
