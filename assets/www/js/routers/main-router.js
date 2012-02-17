define([
    'jquery',
    'underscore',
    'backbone',
    'views/login',
    'views/feeds'
], function($, _, Backbone, loginView, feedsView){

    var MainRouter = Backbone.Router.extend({
		routes: {
			'': 'index',
			'login': 'login',
			'feeds': 'showFeeds'
		},
		
		login: function() {
//            Lazy loading: create the view only when needed if it doesn't exist yet
            App.views.loginView = App.views.loginView || new loginView;
            App.mainRegion.show(App.views.loginView);
		},
		
		showFeeds: function() {
            App.views.feedsView = App.views.feedsView || new feedsView;
            App.mainRegion.show(App.views.feedsView);
//			feedsView.render();
			//$.mobile.changePage('#activityView', 'slide', false, false);
		},
		
		index: function(){
			//Startup stuff
            if (App.session.logged) {
                // The user is already logged --> goto index
//                Check security issues

            } else {
//                show login view
//                loginView.render();
//                Redirect to #login
                this.navigate('login', {trigger: true});
            }
		}
		
	});

    return MainRouter;
});