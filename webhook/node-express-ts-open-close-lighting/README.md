# Open/Close Lighting Control (TypeScript)

This SmartApp turns on and off a light when something opens and closes. It shows how to subscribe to events and execute device commands.

## File Structure

* smartapp.ts &mdash; the SmartApp implementation
* server.ts &mdash; the Express server that hosts the SmartApp as a web-hook
* locales/en.json &mdash; English version of the app configuration page text
* tsconfig.json &mdash; TypeScript configuration options
* tslint.json &mdash; TypeScript lint (style) options
* dist &mdash; Generated JavaScript files

## Starting the server

* Clone the repository and cd into this directory.
```bash
git clone https://github.com/SmartThingsCommunity/app-examples.git
cd node-express-open-close-lighting
```
* Install the NPM packages
```bash
npm install
```
* Start the server
```javascript
npm start
```
