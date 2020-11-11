import {SmartApp} from '@smartthings/smartapp'

/* Define the SmartApp */
const smartApp = new SmartApp()
    .enableEventLogging(2)
    .configureI18n()

    // Configuration page definition
    .page('mainPage', (_, page) => {

        // prompts user to select a contact sensor
        page.section('sensors', section => {
            section
                .deviceSetting('contactSensor')
                .capabilities(['contactSensor'])
                .required(true);
        });

        // prompts users to select one or more switch devices
        page.section('lights', section => {
            section
                .deviceSetting('lights')
                .capabilities(['switch'])
                .required(true)
                .multiple(true)
                .permissions('rx');
        });
    })

    // Handler called whenever app is installed or updated
    // Called for both INSTALLED and UPDATED lifecycle events if there is
    // no separate installed() handler
    .updated(async (context, updateData) => {
        await context.api.subscriptions.delete()
        await context.api.subscriptions.subscribeToDevices(context.config.contactSensor,
            'contactSensor', 'contact', 'openCloseHandler');
    })

    // Handler called when the configured open/close sensor opens or closes
    .subscribedEventHandler('openCloseHandler', (context, event) => {
        const value = event.value === 'open' ? 'on' : 'off';
        context.api.devices.sendCommands(context.config.lights, 'switch', value);
    });

export default smartApp
