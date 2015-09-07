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

# Add states
layerA.states.add
    second: { scale: 0.75 }
    third:  { rotation: 90, scale: 1 }

# Set the animation options
layerA.states.animationOptions =
    curve: "spring(600,30,0)"

# Toggle states on click
layerA.on Events.Click, ->
    layerA.states.next()