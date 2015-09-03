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

animateOpacity = () ->

	targetOpacity = 1
	targetOpacity = 0.5 if layerA.opacity is 1

	layerA.animate
		properties:
			opacity: targetOpacity 
		curve: "ease"
		time: 1

layerA.on Events.AnimationStop, animateOpacity

animateOpacity()