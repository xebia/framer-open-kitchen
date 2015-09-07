# Set background
layerDimension = 150
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

# Create Layers
layerA = new Layer
	width: layerDimension
	height: layerDimension
	backgroundColor: "#fff"
	
# Add states
layerA.states.add
    bottomRight: { 
    	x : Screen.width - layerDimension
    	y : Screen.height - layerDimension 
    }
    
# Set the animation options
layerA.states.animationOptions =
    curve: "spring(600,30,0)"

# Toggle states on click
layerA.on Events.Click, ->
    layerA.states.next()