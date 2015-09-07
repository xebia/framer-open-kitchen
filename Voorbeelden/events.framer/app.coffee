# Set background
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

# Create Layers
layerA = new Layer
	width: 100
	height: 100
	backgroundColor: "#fff"
	borderRadius: 6

layerA.center()
layerA.draggable.enabled = true

layerA.on Events.TouchStart, ->
    print 'touchstart'
layerA.on Events.TouchEnd, ->
    print 'end'

layerA.on Events.DragStart, ->
    this.animate
        properties: { scale: 1.2 }, time: 0.2

layerA.on Events.DragMove, (event) ->
	this.rotationZ = this.draggable.velocity.x * 10

layerA.on Events.DragEnd, ->
    this.animate
        properties: { scale: 1, rotationZ: 0 }, time: 0.2