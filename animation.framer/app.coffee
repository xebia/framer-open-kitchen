# Set background
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

# Create Layers
layerA = new Layer
	width: 150
	height: 150
	backgroundColor: "#fff"
	borderRadius: 6

layerA.center()

layerA.animate
	properties:
		opacity: 1
	curve: "ease"
	time: 1