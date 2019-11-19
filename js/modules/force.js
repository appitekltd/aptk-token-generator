/*
 *  @module $Force
 *  @desc Stores the connected apps used to connect the user
 */
var $Force = { 
  'Sandbox': new Forcetek({
    callbackUrl: 'https://www.appitek.com/tools/token-generator.html',
    consumerKey: '3MVG95NPsF2gwOiM6f7BlORxLo84ZxqHfIx4JcLPHIW6TJg71Jj27_NdYXnBYkBylgHOJOF5zrpOE0Is24KwN',
    proxyUrl: 'https://www.appitek.com/tools/forcetek/proxy.php',
    loginUrl: 'https://test.salesforce.com/',
    apiVersion: 'v42.0'
  }),
  'Production': new Forcetek({
    callbackUrl: 'https://www.appitek.com/tools/token-generator.html',
    consumerKey: '3MVG95NPsF2gwOiM6f7BlORxLo84ZxqHfIx4JcLPHIW6TJg71Jj27_NdYXnBYkBylgHOJOF5zrpOE0Is24KwN',
    proxyUrl: 'https://www.appitek.com/tools/forcetek/proxy.php',
    loginUrl: 'https://login.salesforce.com/',
    apiVersion: 'v42.0'
  })
};