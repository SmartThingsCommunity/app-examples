module.exports = (context, page) => {
	page.previousPageId('collapsablePage')
	page.nextPageId('indexPage')

	page.section('main', section => {

		section.enumSetting('dynamicAction')
			.submitOnChange(true)
			.options(['turnOn', 'setLevel', 'setLevelAndColorTemp'])
			.defaultValue('turnOn')
			.required(true)

		const action = context.configStringValue('dynamicAction')
		if (action === 'setLevel' || action === 'setLevelAndColorTemp') {
			section.numberSetting('dynamicLevel')
				.min(0)
				.max(100)
				.step(1)
				.style('SLIDER')
		}

		if (action === 'setLevelAndColorTemp') {
			section.numberSetting('dynamicColorTemp')
				.min(2800)
				.max(9000)
				.step(100)
				.style('SLIDER')
		}
	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
	})
}
