# Set background
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

# Create Layers
layerA = new Layer
	width: 150
	height: 150
	backgroundColor: "#fff"
	borderRadius: 6

layerA.centerY()
layerA.x = 10
layerA.draggable.vertical = true

animatePosition = () ->
	if looping
		targetX = Screen.width - layerA.width - 10
		targetX = 10 if layerA.x != 10
		layerA.animate
			properties:
				x: targetX 
			curve: "ease"
			time: 1

layerA.on Events.AnimationStop, animatePosition

looping = false
hasDragged = false

layerA.on 'click', () ->
	if !hasDragged
		looping = !looping
		animatePosition()

layerA.on Event.DragStart, () -> 
	hasDragged = true
	layerA.animateStop()

layerA.on Events.DragEnd, () ->
	if hasDragged
		startedDrag = false
		looping = true
		animatePosition()