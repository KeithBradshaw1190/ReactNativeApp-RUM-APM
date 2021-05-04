# ReactNative App with expressJS API 
Instrumented with APM for the backend API and RUM in the APP.


# Set up

Below steps to be followed once react native CLI set up followed here:https://reactnative.dev/docs/environment-setup 

#### In the shoppingListAPI folder
* Create a .env file with the DD_API_KEY value 
* run ``` docker-compose build```
* run ``` docker-compose up```

#### Set. up Ngrok to make the API accessible outside the local network
* Install here:https://ngrok.com/download run 
* ``` ngrok http 3000```
* Grab the https url returned and use in next section below

#### In the shoppingList folder 
 Update the App.js file:
  1. Replace the NGROK_LIST_API_URL value with the https URL from Ngrok
  1. Update The RUM client and and appID, details found in your Datadog account by creating a new react-native application here: https://app.datadoghq.com/rum/list

