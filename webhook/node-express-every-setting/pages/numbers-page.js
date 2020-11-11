module.exports = (_, page) => {
	page.previousPageId('linksPage')
	page.nextPageId('textPage')

	// prompts user to select a contact sensor
	page.section('numbers', section => {
		section.numberSetting('number')

		section.numberSetting('constrainedNumber')
			.min(-2000)
			.max(10000)

		section.numberSetting('decimal')

		section.decimalSetting('decimalWithUnits')
			.min(-5)
			.max(5)
			.postMessage('C')

		section.numberSetting("steppedNumber")
			.min(10)
			.max(3600)
			.step(10)

		section.numberSetting("sliderNumber")
			.min(2800)
			.max(9000)
			.step(100)
			.style('SLIDER')
	});

	page.section('footer', section => {
		section.pageSetting('indexPage')
	})
}
