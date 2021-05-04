# ReactNative App with expressJS API 
Instrumented with APM for the backend API and RUM in the APP.


# Set up

Below steps to be followed once react native CLI set up followed here:https://reactnative.dev/docs/environment-setup 

#### In the shoppingListAPI folder
* run ``` npm install```
* Create a .env file with the DD_API_KEY value 
* run ``` docker-compose build```
* run ``` docker-compose up```

#### Set. up Ngrok to make the API accessible outside the local network
* Install here:https://ngrok.com/download  
* run ``` ngrok http 3000```
* Grab the forwarding 'https' prefixed url returned, and use in next section below

#### In the shoppingList folder

 Update the App.js file:
  1. Replace the NGROK_LIST_API_URL value with the https URL from Ngrok
  1. Update The RUM client and and appID, details found in your Datadog account by creating a new react-native application here: https://app.datadoghq.com/rum/list
  1. run ``` npm install ``` 
  1. To start the application server run  ```react-native start ```
  1. To start the application, connect a device or emulator:
   (If device, ensure it's configured for development mode) run the following depending on ios or android:  ```react-native run-android ```
  

#### Screenshots
React App Screenshot![image](https://user-images.githubusercontent.com/14819590/117049183-c073eb80-ad0b-11eb-8fc1-c98d1c1a9f5b.jpg)

APM <> RUM correlation![image](https://user-images.githubusercontent.com/14819590/117047695-15166700-ad0a-11eb-8c23-9fcdd827473e.png)

