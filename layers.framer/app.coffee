# Set background
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

# Create Layers
layerA = new Layer
	width: 150
	height: 150
	backgroundColor: "#fff"
	borderRadius: 6

layerB = layerA.copy()

subLayer = new Layer
	width: 50
	height: 50
	backgroundColor: "#766CC6"
	borderRadius: 100

layerA.addSubLayer subLayer

layerA.center()
layerB.center()
subLayer.center()
layerA.x -= 90
layerB.x += 90