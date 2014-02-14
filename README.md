Generic Chrome Mobile Angular Application
=========================================

This is a generic app framework that can run as a standalone webpage, a chrome extension, an android app, or an ios app,

Setup
-----

1. npm install -g yo
2. npm install
3. bower install

Running the webapp
------------------

1. grunt serve

Running the chrome app
----------------------

1. enable chrome developer flags (is this necessary?): chrome://flags and enable "Experimental Extension APIs"
2. Go to Tools -> Extensions
3. Load Unpacked Extension- navigate to ordrob-front/app

Running any mobile app
----------------------

Prerequisites

1. npm install -g cca
2. cca checkenv

Running the android app
-----------------------

The first time

1. brew install android
2. android 

To run the android on an emulator or connected device

1. cca run android

Running the ios app
-------------------

Setup

1. npm install -g ios-deploy
2. npm install -g ios-sim

To run on a emulator

1. cca emulate ios

To run on a connected device (requires provisioning)

1. cca run ios

Changelog
---------

Initial setup

1. yo angular
2. add bootstrap
3. grunt bower-install
4. modify gruntjs to no longer run grunt bower-install on grunt serve task
5. remove jquery and bootstrap.js from index.html
6. modify views
