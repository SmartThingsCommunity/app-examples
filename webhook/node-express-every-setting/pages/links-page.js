module.exports = (context, page) => {
	page.previousPageId('imagesPage')
	page.nextPageId('numbersPage')

	page.section('links', section => {
		section.linkSetting('linkSetting')
			.url('http://www.smartthings.com')
		section.linkSetting('linkButtonSetting')
			.url('http://www.smartthings.com')
			.style('BUTTON')
	})

	page.section('pages', section => {

		const phoneNumbers = [
			context.configStringValue('notifyPhone1'),
			context.configStringValue('notifyPhone2'),
			context.configStringValue('notifyPhone3')
		].filter(it => it).join(', ')

		section.pageSetting('page1')
			.page('linkedPage1')
			.style(context.config.notifyPhone ? 'COMPLETE' : 'DEFAULT')
			.description(phoneNumbers)

		section.pageSetting('page2')
			.page('linkedPage2')
			.style(context.config.enabledModes ? 'COMPLETE' : 'DEFAULT')
			.description(context.config.enabledModes ? `Location in either of ${context.config.enabledModes.length} modes` : '')
	})

	page.section('oauth', section => {
		const clientId = 'aac8cf7d9-4102-4cfa-a253-107efa32e4bf'
		const scope = 'x:read,x:write'
		const redirectUri = encodeURIComponent('https://api.smartthings.com/oauth/callback')
		const url = `https://st-dummy-oauth-server.glitch.me/oauth/login?client_id=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}`

		section.oauthSetting('link')
			.urlTemplate(url)

	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
	})
}
