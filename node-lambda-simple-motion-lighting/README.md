# Simple Motion Lighting

This SmartApp turns on lights when motion is detected and turns them off after it stops, with and option to delay the turn-off for a period of time. It supports
multiple motion sensor and multiple lights. Motion on any sensor turns the lights on and the lack of motion or all sensors triggers the turn off process.

## File Structure

* smartapp.js &mdash; the SmartApp implementation
* server.js &mdash; the Express server that hosts the SmartApp as a web-hook
* locales/en.json &mdash; English version of the app configuration page text