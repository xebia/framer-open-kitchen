exports.copyPositionAndSize = (from, to) ->
  to.width = from.width
  to.height = from.height
  to.x = from.x
  to.y = from.y

exports.logLayerInfo = (layer) ->
  print 'Layer: ' + layer.name
  print 'x: ' + layer.x + ', y: ' + layer.y + ', width: ' + layer.width + ', height: ' + layer.height

exports.dragAndLog = (layer) ->
  layer.draggable = true;
  layer.backgroundColor = "rgba(254, 209, 54, 0.5)";

  draggerSize = 20;

  setDraggerPositions = ->
    draggerW.x = layer.maxX - draggerSize
    draggerW.y = layer.y + (layer.height / 2) - draggerSize
    draggerH.x = layer.x + (layer.width / 2) - draggerSize
    draggerH.y = layer.maxY - draggerSize

  draggerW = new Layer
    width: draggerSize * 2, height: draggerSize * 2, borderRadius: draggerSize * 2
  draggerW.draggable.horizontal = true;

  draggerH = draggerW.copy();
  draggerH.draggable.vertical = true;

  draggerW.on Events.DragMove, ->
    layer.width = draggerW.x - layer.x + draggerSize
    setDraggerPositions()

  draggerH.on Events.DragMove, ->
    layer.height = draggerH.y - layer.y + draggerSize
    setDraggerPositions()

  layer.on Events.DragMove, -> setDraggerPositions()
  layer.on Events.DragEnd, -> exports.logLayerInfo(layer)
  draggerW.on Events.DragEnd, -> exports.logLayerInfo(layer)
  draggerH.on Events.DragEnd, -> exports.logLayerInfo(layer)

  setDraggerPositions();