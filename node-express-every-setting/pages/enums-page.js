module.exports = (_, page) => {
	page.previousPageId('devicesPage')
	page.nextPageId('imagesPage')

	page.section('boolean', section => {
		section.booleanSetting('boolean')
		section.booleanSetting('booleanImage').image('https://img.icons8.com/material/2x/cloud.png')
	})

	page.section('enums', section => {
		section.enumSetting('simpleEnum')
			.options(['red','yellow','green','blue'])

		section.enumSetting('mapEnum')
			.translateOptions(false)
			.options({on: 'Turn On', off: 'Turn Off', noop: 'Leave As Is'})

		section.enumSetting('objectListEnum')
			.translateOptions(false)
			.options([{id: 25, name: '25 %'}, {id: 50, name: '50 %'}, {id: 75, name: '75 %'}, {id: 100, name: '100 %'}])

		section.enumSetting('groupedEnum')
			.groupedOptions([
				{name: 'primaryColors', options: [
						{id:'red', name:'Red'},{id:'yellow', name:'Yellow'},{id:'blue', name:'Blue'}]},
				{name: 'secondaryColors', options: [
						{id:'green', name:'Green'},{id:'orange', name:'Orange'},{id:'purple', name:'Purple'}]},
			])
	})

	page.section('other', section => {
		section.modeSetting('mode')
		section.modeSetting('multipleMode').multiple(true)
		section.securitySetting('security')
		section.sceneSetting('scene')
	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
	})
}
