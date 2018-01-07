# <%= name %> - WIKI -

<% if (internal) { -%>
## Internal
This is a private wiki used as a reference for developers.
<!--Here you can write all specific commands and notes that you need to share with all committers of this project-->

### Links
* Staging system
* Live system

### Credentials
<!--access credentials-->
* For  test users/ each existing Role

### Notes
<!--internal notes to developers-->

### Important Commands to run
<!--Important Commands to run with a short description of the context-->

<% if (reactNative) { -%>

_For React Native_
- Start new project: ``` react-native init [PROJECT-NAME]```
- Link dependencies to native projects: ```react-native link [LIBRARY-NAME]```
- Clear bundle: ```watchman watch-del-all```
- Support decorators:
```bash
npm install babel-plugin-transform-decorators-legacy --save
npm install babel-plugin-transform-class-properties --savenpm run start
```

<% } -%>

<% if (meteor) { -%>

_For Meteor_
- Run the development server by running: ```meteor```

<% } -%>

<% if (symfony) { -%>

_For Symfony_
- Start by downloading the  [composer](https://getcomposer.org) 

<% } -%>

### Contacts
<!--How to contact the responsible person for this project -->
Please refer to :
* 
*
 

<% } -%>

<% if (translations) { -%>
## Translations
<!--Where are the translation documents and how to generate translation files-->
### links
### commands
<% } -%>

<% if (mobile) { -%>
## Mobile Env Setup
<!--All about mobile env: certificates, SDK, special config...-->
## Mobile Build
<!--Notes on how to build the app -->

<% if (reactNative) { -%>

### Running on the Simulator
- Make sure that the backend app is running

_for iOS_:
- From the `MobileApp` directory run `react-native run-ios`

_for android_:
- From the `MobileApp` directory run `react-native run-android`

### Notes for running on a Device
- Make sure that the backend app is running
- In your settings file change `localhost` to your machine's IP address
- Make sure that your device is connected to the same network as your machine.
- For Android: 
  - Run `adb devices` to make sure your device shows up
  - Run `adb reverse tcp:8081 tcp:8081`

<% } -%>

<% } -%>
