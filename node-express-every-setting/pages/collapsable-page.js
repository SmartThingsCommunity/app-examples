module.exports = (_, page) => {
	page.previousPageId('textPage')
	page.nextPageId('dynamicPage')

	page.section('hideable', section => {
		section.hideable(true)
		section.booleanSetting('flashLight')
		section.booleanSetting('pushNotification')
	})

	page.section('hidden', section => {
		section.hideable(true).hidden(true)
		section.modeSetting('whenMode')
		section.timeSetting('afterTime')
	})
}
