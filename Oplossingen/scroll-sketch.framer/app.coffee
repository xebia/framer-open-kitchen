# This imports all the layers for "scroll-sketch" into scrollSketchLayers
layers = Framer.Importer.load "imported/scroll-sketch"

scroll = new ScrollComponent
	width: layers.scrollarea.width
	height: layers.scrollarea.height
	x: layers.scrollarea.x
	y: layers.scrollarea.y

scroll.scrollHorizontal = false

scroll.contentInset =
	top: 20
	bottom: 20

layers.item.visible = false

for i in [0..10]
	item = layers.item.copy()
	item.visible = true
	item.y = i * item.height +  (i+1) * 20
	item.superLayer = scroll.content