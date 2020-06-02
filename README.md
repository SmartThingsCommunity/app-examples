# Example SmartApps

This repository contains a collection of [SmartApps](https://smartthings.developer.samsung.com/docs/smartapps/smartapp-basics.html) that can serve as starting points for your own apps. It include both [WebHook](https://smartthings.developer.samsung.com/docs/smartapps/webhook-apps.html) and [AWS Lambda](https://smartthings.developer.samsung.com/docs/smartapps/aws-lambda.html) examples. 

If you are not already familiar with SmartApp development check out the Samsung SmartThings [developer portal](https://smartthings.developer.samsung.com/docs/index.html).

## Table of Contents

* [Node JS](https://nodejs.org/en/) Examples
  * [Control lights when something opens and closes](node-express-open-close-lighting/README.md) 
  &mdash; simple app showing how to subscribe to events and send commands to devices. 
  Set up to be run as an [Express](https://www.npmjs.com/package/express) web-hook app.

  * [TypeScript control lights when something opens and closes](node-express-open-close-lighting/README.md)
  &mdash; TypeScript version of the above app that turns on and off a light when something opens
  and closes.
  
  * [Control lights based on motion](node-lambda-simple-motion-lighting/README.md) 
  &mdash; adds API state calls and the creation of scheduled events to the basics of event 
  subscriptions and device commands. Set up to be deployed to [Amazon AWS](https://aws.amazon.com/) 
  as a [Lambda](https://aws.amazon.com/lambda/) function using 
  [Serverless](https://www.serverless.com/), though can be run as an express app 
  for debugging purposes if desired.
