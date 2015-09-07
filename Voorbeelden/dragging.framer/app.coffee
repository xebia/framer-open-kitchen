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
layerB.opacity = 0.5
layerB.width = 300
layerB.height = 300

layerA.center()
layerB.center()

layerA.draggable.enabled = true
layerA.draggable.overdrag = false
# layerA.draggable.bounce = false
# layerA.draggable.momentum = false

layerA.draggable.constraints = {
    x: layerB.x
    y: layerB.y
    width: layerB.width
    height: layerB.height
}