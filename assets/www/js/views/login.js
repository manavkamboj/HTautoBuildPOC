/**
 login View
 It show a login form
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login.html'
], function($, _, Backbone, template){
    var LoginView = Backbone.View.extend({
        events: {
//            Use classes instead of IDs help code reuse and avoid duplicated IDs
            'submit form': 'executeLogin'
        },

        initialize: function(){
//              Make sure functions are called in the right scope
//              _bindAll(this, 'executeLogin');

//              Bind models here
            var compiledTemplate = _.template(template);

            this.$el.append(compiledTemplate);
            console.log(this.$el);
//              this.setElement(compiledTemplate);
//              $('#mainContainer').append(this.el);
        },

        render: function(){
            console.log('rendering login view');
			return this;
    	},

        executeLogin: function(e){
            e.preventDefault();
            var usr = this.$('.usr').val();
            var pwd = this.$('.pwd').val();

            var formData = {
                person: {
                    email: usr,
                    password: pwd
                },
                generate_token: true
            };
//              login(usr, pwd)

//            todo: organize this code better and bring some parts in the controller
            $.ajax({
                url: App.settings.server + App.settings.urls.login,
                type: 'POST',
                dataType: 'json',
                data: formData,
                success: function(data){
                    console.log('ajax login success');
                    if(data.result && data.token){
//                        session = data;
//                        Set_Cookie('session_token', session.token);
                        App.session.token = data.token;
                        App.session.logged = true;
                        App.routers.mainRouter.navigate('feeds', {trigger: true});
                    }
                }
            });
        }
      });

      return LoginView;
  }
);
