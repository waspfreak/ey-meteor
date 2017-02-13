import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Router.route('/register');
Router.route('/dashboard');
Router.route('/', {
    // options for the route
    template: 'home'
});

Router.configure({
    layoutTemplate: 'layout'
});

import './main.html';

import './components/nav.html';

import './components/header.html';

import './components/card_pending-activities.html';

import './components/card_contact-2.html';

import './components/card_contact-3.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
