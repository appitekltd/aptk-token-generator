/*
 *  @module $App
 *  @desc Core controller for the UI
 */
var $App = new Vue({
  el: '#search',
  data: {
    environment: 'Production',
    authenticated: '',
    client: {
      token: '',
      email: '',
      scope: '',
      instance: '',
      id: ''
    }
  },
  methods: {

    /*
     *  @method $App.loginUser()
     *  @desc Logs a user in using the ForceTek framework, shows a popup and 
     *    returns the tooling api url we need
     * 
     *  @return {Null}
     */
    loginUser: function() {
      $App.loading = 'Authenticating..';
      $Force[$App.environment].login(function(client) {
        $App.authenticated = true;
        $App.client.token = decodeURIComponent(client.access_token);
        $App.client.email = decodeURIComponent(client.email);
        $App.client.scope = decodeURIComponent(client.scope);
        $App.client.instance = decodeURIComponent(client.instance_url);
        $App.client.id = decodeURIComponent(client.id);
      });
    },

    /*
     *  @method $App.logoutUser()
     *  @desc Logs a user out by resetting all values on the app, as if they
     *    had refreshed the page
     * 
     *  @return {Null}
     */
    logoutUser: function() {
      $App.authenticated = false;
      $App.url = '';
      $App.email = '';
      $App.options = {
        apex: true,
        rules: false,
        flows: true,
        packages: false,
        workflows: false,
        environment: 'Production'
      },
      $App.search = '';
      $App.filter = '';
      $App.all = false;
      $App.loading = '';
    }

  }
});