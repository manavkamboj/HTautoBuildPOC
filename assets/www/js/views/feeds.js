/**
 feed View
 It show an activity feed
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/feed-collection',
    'text!templates/feed.html'
], function($, _, Backbone, feedsCollection, template){

    var FeedItemView = Backbone.Marionette.ItemView.extend({
        template: template
//        template: '#feedItemTemplate'
    });

    var FeedsView = Backbone.Marionette.CollectionView.extend({
        itemView: FeedItemView,
//
//        events: {
////            Use classes instead of IDs help code reuse and avoid duplicated IDs
//
//        },

        initialize: function(){
//              Make sure functions are called in the right scope
//              _bindAll(this, 'executeLogin');

//            this.$el.append("loading...");
//
//            var feedsUrl = App.settings.server + '/polymorphic_activities.json?page=1&per_page=10&auth_token=' + App.session.token;
//
//            var tmpModel = Backbone.Model.extend();
//            App.models.feed = new tmpModel;
//            var tmpCollection = Backbone.Collection.extend();
//            App.collections.feeds = new tmpCollection;
//            var feeds = App.collections.feeds;
//            //feeds.model = App.models.feed;
//            feeds.url = feedsUrl;
//            feeds.fetch();
//            this.collection = feeds;
            App.collections.feeds = App.collections.feeds || new feedsCollection;
            this.collection = App.collections.feeds;
//            App.collections.feeds.fetch();
        }
//
//        render: function(){
//            console.log('rendering feedView');
//			return this;
//    	}

      });

      return FeedsView;
});