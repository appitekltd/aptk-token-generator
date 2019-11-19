# aptk-token-generator
Session token generator for Salesforce API development

## About ##
This is a free tool we created to allow developers to quickly get details of their authenticated Salesforce session by just logging into their account.

This saves you having to create a [connected app](https://help.salesforce.com/articleView?id=connected_app_overview.htm&r=https%3A%2F%2Fwww.google.com%2F&type=5) and going through the whole oAuth flow to get an access token, instead you can just get started on using the token in your code.

This actually uses our own [forcetek](https://github.com/appitekltd/aptk-forcetek) library, which is a minimal JS wrapper for the SF REST API, which is used here to authenticate the user and pull the session details from the returnURL parameters.

The minimal proxy.php file in this repository is used by forcetek to act as a proxy to send our REST API requests, meaning we don't run into CORS from a client-side request.

## Bugs ##
If you find any issues please let us know! We try our best to keep our free tools updated and in working order, but cannot be held responsible for any issues that occur from using them.