module.exports = (_, page) => {
	page.nextPageId('devicesPage')
	page.complete(true)

	page.section('pages', section => {
		section.pageSetting('devices').page('devicesPage')
		section.pageSetting('enums').page('enumsPage')
		section.pageSetting('images').page('imagesPage')
		section.pageSetting('links').page('linksPage')
		section.pageSetting('numbers').page('numbersPage')
		section.pageSetting('text').page('textPage')
	})

	page.section('effects', section => {
		section.pageSetting('collapsable').page('collapsablePage')
		section.pageSetting('dynamicPage').page('dynamicPage')
	})
}
