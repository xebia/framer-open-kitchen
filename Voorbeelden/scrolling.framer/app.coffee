# Set background
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

scroll = new ScrollComponent
  backgroundColor: "rgba(255,255,255,0.2)"
  scrollHorizontal: false
  width: 320
  height: 70 * 5 + 10
  borderRadius: 8

scroll.contentInset =
	top: 10
	bottom: 10

scroll.center()

for i in [0..10]
  layer = new Layer
    superLayer: scroll.content
    backgroundColor: "#fff"
    borderRadius: 4
    width: 300
    height: 60
    x: 10
    y: 70 * i

