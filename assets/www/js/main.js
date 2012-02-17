require.config ({
	paths: {
		jquery: 'libs/jquery',
		jquerymobile: 'libs/jquery.mobile',
		json2: 'libs/json2',
		underscore: 'libs/underscore-amd',
		backbone: 'libs/backbone-amd',
        marionette: 'libs/backbone.marionette',
		text: 'libs/text-1.0.2',
        settings: 'ht/settings'
	},
    baseUrl: 'js'
});

require (['backbone', 'jquery', 'underscore' ],
    function( Backbone, $, _ ) {
        // Basic frameworks loaded, now we can load depending frameworks
        require (['app', 'marionette'],
            function() {
//                htApp.initialize();
                App.start();
            }
        );
    }
);

