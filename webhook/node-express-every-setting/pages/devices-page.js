module.exports = (_, page) => {
	page.previousPageId('indexPage')
	page.nextPageId('enumsPage')

	page.section('section1', section => {

		// Single-select device with default read permission
		section.deviceSetting('sensor')
			.capability('contactSensor')

		// Multiple-select device with default read permission
		section.deviceSetting('multipleSensor')
			.capability('motionSensor')
			.multiple(true)

		// Multiple capabilities showing only devices that have both
		section.deviceSetting('multipleCapabilities')
			.capabilities(['switch', 'powerMeter'])
			.multiple(true)

		// Device with read and execute permissions, i.e. can bew sent commands
		section.deviceSetting('actuator')
			.capability('switch')
			.permissions('rx')
	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
	})
}
