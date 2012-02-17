define([
    'jquery',
    'underscore',
    'backbone',
    'models/feed-model'
], function($, _, Backbone, feedModel){

    var FeedCollection = Backbone.Collection.extend({

        model: feedModel,
        url: function(){
            return (App.settings.server + App.settings.urls.feeds + App.session.token);
        },

        initialize: function(){
            this.fetch();
        }
    });

    return FeedCollection;

});