$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("vBbvihMsKuxIfMc999TtrwCHAKxRW2PMarjtRVBn", "Y53eTAGBxDeiWNDFOwomUhDFjlEnh2qEiAiY9GOi");	



	logIn: function(e) {
	  var self = this;
	  var username = this.$("#login-username").val();
	  var password = this.$("#login-password").val();
  
	  Parse.User.logIn(username, password, {
		success: function(user) {
		  new ManageTodosView();
		  self.undelegateEvents();
		  delete self;
		},

		error: function(user, error) {
		  self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
		  self.$(".login-form button").removeAttr("disabled");
		}
	  });
});      