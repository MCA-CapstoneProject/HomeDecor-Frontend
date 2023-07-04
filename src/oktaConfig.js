const oktaConfig = {
    clientId: '0oaa7c6fol6BaCXrU5d7',
    issuer: '	https://dev-52095563.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
  };
  
  
  export default oktaConfig;