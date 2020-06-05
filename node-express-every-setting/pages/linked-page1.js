module.exports = (context, page) => {
	page.nextPageId('linksPage')
	page.section('main', section => {
		section.phoneSetting('notifyPhone1')
		section.phoneSetting('notifyPhone2')
		section.phoneSetting('notifyPhone3')
	})
}
