module.exports = (_, page) => {
	page.previousPageId('enumsPage')
	page.nextPageId('linksPage')

	page.section('image', section => {
		section.imageSetting('imageSetting')
			.image('https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/arsenal_crest_colors.jpg')
	})

	page.section('images', section => {
		section.imagesSetting('imagesSetting')
			.images([
				'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/manchester_united_logo_colors.png',
				'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2018/08/aston_villa_fc-221x300.png',
				'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/11/leicester_city_fc_colors.png'
			])
	})

	page.section('video', section => {
		section.videoSetting('video')
			.video('https://st-bob-misc-stuff.s3.amazonaws.com/videos/incidents/video1.mp4')
	})

	page.section('footer', section => {
		section.pageSetting('indexPage')
	})
}
