app = Framer.Importer.load "imported/app"

utils = require 'PositionAndSizeUtils'

bg = new BackgroundLayer

app.user.states.add
	home: x: 45, y: 0, width: 339, height: 339
	top: x: -135, y: -85, width: 150, height: 150
app.user.states.animationOptions = time: 0.5

app.logo.states.add
	home: y: 1018, scale: 1
	bottom: y: 1093, scale: 0.5
app.logo.states.animationOptions = time: 0.5

app.btn_uren.states.add
	home: x: 0
	left: x: -app.btn_uren.width - 300
app.btn_uren.states.animationOptions = time: 0.5

app.btn_declaraties.states.add
	home: x: 0
	left: x: -app.btn_declaraties.width - 300
app.btn_declaraties.states.animationOptions = time: 0.5, delay: 0.1

app.logo.y += 100;
app.logo.opacity = 0
app.user.scaleX = 0.5
app.user.scaleY = 0.5
app.user.opacity = 0

app.logo.animate
	properties: y: app.logo.y - 100, opacity: 1
	time: 0.5
	delay: 1

app.user.animate
	properties: opacity: 1, scaleX: 1, scaleY: 1
	time: 0.5
	delay: 1

app.btn_uren.x = bg.maxX
app.btn_declaraties.x = bg.maxX

app.btn_uren.animate
	properties: x: 0
	time: 0.5
	delay: 0.9

app.btn_declaraties.animate
	properties: x: 0
	time: 0.5
	delay: 1

app.btn_uren.on Events.Click, ->
	app.btn_uren.states.switch('left')
	app.btn_declaraties.states.switch('left')
	app.user.states.switch('top')
	app.logo.states.switch('bottom')

app.user.on Events.Click, ->
	app.btn_uren.states.switch('home')
	app.btn_declaraties.states.switch('home')
	app.user.states.switch('home')
	app.logo.states.switch('home')