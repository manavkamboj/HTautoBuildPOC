/*
App is supposed to contain all the globals, settings and objects that should be globally accessible
Please keep track of the structure here and update this comment!
Classes starts with Capital letter, instances start with small letter
App = {
    views: {},              // Bacbkbone views
    routers: {},            // Backbone routers
    controllers: {},        // Backbone controllers
    models: {},             // Backbone models
    defaults: {             // Temporary list of default settings that get merged with custom settings into App.settings when the App get initialized. Warning: This attribute is undefined at runtime.
        server              // Server's base url
        urls: {             // Specific pages' urls
            login
            feeds
        }
    },
    settings: {}            // Settings that override or extend defaults
    session: {
        logged
        device
        token
    }
}
 */



define([
	'jquery',
	'underscore',
	'backbone',
//	'router',
//    The following don't return an object
    'marionette',
    'settings'
//	'jquerymobile',
//	'json2'
], function($, _, Backbone, Router){

    window.App = new Backbone.Marionette.Application();

//    Extend the App object organizing the objects needed
    App.views = App.views || {};
    App.routers = App.routers || {};
    App.controllers = App.controllers || {};    //todo: Check if needed
    App.models = App.models || {};
    App.collections = App.collections || {};
//    Temporary settings changing runtime
    App.session = App.session || {
        logged: false,           // The user is logged in
        device: 'undefined',
        token: null
    };
//    Default settings
    App.defaults = {
//        server: 'http://localhost:3000',
        server: 'https://qa-secure.healthtap.com',
        urls: {
            login: '/people/sign_in.json',
            feeds: '/polymorphic_activities.json?page=1&per_page=10&auth_token='
        }
    };
//        Custom settings. You can configure custom settings in js/ht/settings.js
    App.settings = htSettings || {};
//        Merge defaults and settings
    App.settings = $.extend(true, {}, App.defaults, App.settings);
//        Remove defaults to free memory
    delete App.defaults;
    if (htSettings) delete htSettings;


//    Add regions in order to delegate DOM elements (DIVs) to render Backbone's Views
    App.addRegions({
        mainRegion: '#mainRegion'
    });

    require(['routers/main-router'], function(mainRouter){
        App.addInitializer(function(options){
            App.routers.mainRouter = new mainRouter;
            Backbone.history.start();

//            TMP
            Backbone.emulateHTTP = true;
            Backbone.emulateJSON = true;
        });
    });

});