require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"PositionAndSizeUtils":[function(require,module,exports){
exports.copyPositionAndSize = function(from, to) {
  to.width = from.width;
  to.height = from.height;
  to.x = from.x;
  return to.y = from.y;
};

exports.logLayerInfo = function(layer) {
  print('Layer: ' + layer.name);
  return print('x: ' + layer.x + ', y: ' + layer.y + ', width: ' + layer.width + ', height: ' + layer.height);
};

exports.dragAndLog = function(layer) {
  var draggerH, draggerSize, draggerW, setDraggerPositions;
  layer.draggable = true;
  layer.backgroundColor = "rgba(254, 209, 54, 0.5)";
  draggerSize = 20;
  setDraggerPositions = function() {
    draggerW.x = layer.maxX - draggerSize;
    draggerW.y = layer.y + (layer.height / 2) - draggerSize;
    draggerH.x = layer.x + (layer.width / 2) - draggerSize;
    return draggerH.y = layer.maxY - draggerSize;
  };
  draggerW = new Layer({
    width: draggerSize * 2,
    height: draggerSize * 2,
    borderRadius: draggerSize * 2
  });
  draggerW.draggable.horizontal = true;
  draggerH = draggerW.copy();
  draggerH.draggable.vertical = true;
  draggerW.on(Events.DragMove, function() {
    layer.width = draggerW.x - layer.x + draggerSize;
    return setDraggerPositions();
  });
  draggerH.on(Events.DragMove, function() {
    layer.height = draggerH.y - layer.y + draggerSize;
    return setDraggerPositions();
  });
  layer.on(Events.DragMove, function() {
    return setDraggerPositions();
  });
  layer.on(Events.DragEnd, function() {
    return exports.logLayerInfo(layer);
  });
  draggerW.on(Events.DragEnd, function() {
    return exports.logLayerInfo(layer);
  });
  draggerH.on(Events.DragEnd, function() {
    return exports.logLayerInfo(layer);
  });
  return setDraggerPositions();
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltbnVtYW4xL1Byb2plY3RzL1hlYmlhL2ZyYW1lci1vcGVuLWtpdGNoZW4vc2tldGNoLmZyYW1lci9tb2R1bGVzL1Bvc2l0aW9uQW5kU2l6ZVV0aWxzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQU8sQ0FBQyxtQkFBUixHQUE4QixTQUFDLElBQUQsRUFBTyxFQUFQLEdBQUE7QUFDNUIsRUFBQSxFQUFFLENBQUMsS0FBSCxHQUFXLElBQUksQ0FBQyxLQUFoQixDQUFBO0FBQUEsRUFDQSxFQUFFLENBQUMsTUFBSCxHQUFZLElBQUksQ0FBQyxNQURqQixDQUFBO0FBQUEsRUFFQSxFQUFFLENBQUMsQ0FBSCxHQUFPLElBQUksQ0FBQyxDQUZaLENBQUE7U0FHQSxFQUFFLENBQUMsQ0FBSCxHQUFPLElBQUksQ0FBQyxFQUpnQjtBQUFBLENBQTlCLENBQUE7O0FBQUEsT0FNTyxDQUFDLFlBQVIsR0FBdUIsU0FBQyxLQUFELEdBQUE7QUFDckIsRUFBQSxLQUFBLENBQU0sU0FBQSxHQUFZLEtBQUssQ0FBQyxJQUF4QixDQUFBLENBQUE7U0FDQSxLQUFBLENBQU0sS0FBQSxHQUFRLEtBQUssQ0FBQyxDQUFkLEdBQWtCLE9BQWxCLEdBQTRCLEtBQUssQ0FBQyxDQUFsQyxHQUFzQyxXQUF0QyxHQUFvRCxLQUFLLENBQUMsS0FBMUQsR0FBa0UsWUFBbEUsR0FBaUYsS0FBSyxDQUFDLE1BQTdGLEVBRnFCO0FBQUEsQ0FOdkIsQ0FBQTs7QUFBQSxPQVVPLENBQUMsVUFBUixHQUFxQixTQUFDLEtBQUQsR0FBQTtBQUNuQixNQUFBLG9EQUFBO0FBQUEsRUFBQSxLQUFLLENBQUMsU0FBTixHQUFrQixJQUFsQixDQUFBO0FBQUEsRUFDQSxLQUFLLENBQUMsZUFBTixHQUF3Qix5QkFEeEIsQ0FBQTtBQUFBLEVBR0EsV0FBQSxHQUFjLEVBSGQsQ0FBQTtBQUFBLEVBS0EsbUJBQUEsR0FBc0IsU0FBQSxHQUFBO0FBQ3BCLElBQUEsUUFBUSxDQUFDLENBQVQsR0FBYSxLQUFLLENBQUMsSUFBTixHQUFhLFdBQTFCLENBQUE7QUFBQSxJQUNBLFFBQVEsQ0FBQyxDQUFULEdBQWEsS0FBSyxDQUFDLENBQU4sR0FBVSxDQUFDLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBaEIsQ0FBVixHQUErQixXQUQ1QyxDQUFBO0FBQUEsSUFFQSxRQUFRLENBQUMsQ0FBVCxHQUFhLEtBQUssQ0FBQyxDQUFOLEdBQVUsQ0FBQyxLQUFLLENBQUMsS0FBTixHQUFjLENBQWYsQ0FBVixHQUE4QixXQUYzQyxDQUFBO1dBR0EsUUFBUSxDQUFDLENBQVQsR0FBYSxLQUFLLENBQUMsSUFBTixHQUFhLFlBSk47RUFBQSxDQUx0QixDQUFBO0FBQUEsRUFXQSxRQUFBLEdBQWUsSUFBQSxLQUFBLENBQ2I7QUFBQSxJQUFBLEtBQUEsRUFBTyxXQUFBLEdBQWMsQ0FBckI7QUFBQSxJQUF3QixNQUFBLEVBQVEsV0FBQSxHQUFjLENBQTlDO0FBQUEsSUFBaUQsWUFBQSxFQUFjLFdBQUEsR0FBYyxDQUE3RTtHQURhLENBWGYsQ0FBQTtBQUFBLEVBYUEsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFuQixHQUFnQyxJQWJoQyxDQUFBO0FBQUEsRUFlQSxRQUFBLEdBQVcsUUFBUSxDQUFDLElBQVQsQ0FBQSxDQWZYLENBQUE7QUFBQSxFQWdCQSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQW5CLEdBQThCLElBaEI5QixDQUFBO0FBQUEsRUFrQkEsUUFBUSxDQUFDLEVBQVQsQ0FBWSxNQUFNLENBQUMsUUFBbkIsRUFBNkIsU0FBQSxHQUFBO0FBQzNCLElBQUEsS0FBSyxDQUFDLEtBQU4sR0FBYyxRQUFRLENBQUMsQ0FBVCxHQUFhLEtBQUssQ0FBQyxDQUFuQixHQUF1QixXQUFyQyxDQUFBO1dBQ0EsbUJBQUEsQ0FBQSxFQUYyQjtFQUFBLENBQTdCLENBbEJBLENBQUE7QUFBQSxFQXNCQSxRQUFRLENBQUMsRUFBVCxDQUFZLE1BQU0sQ0FBQyxRQUFuQixFQUE2QixTQUFBLEdBQUE7QUFDM0IsSUFBQSxLQUFLLENBQUMsTUFBTixHQUFlLFFBQVEsQ0FBQyxDQUFULEdBQWEsS0FBSyxDQUFDLENBQW5CLEdBQXVCLFdBQXRDLENBQUE7V0FDQSxtQkFBQSxDQUFBLEVBRjJCO0VBQUEsQ0FBN0IsQ0F0QkEsQ0FBQTtBQUFBLEVBMEJBLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTSxDQUFDLFFBQWhCLEVBQTBCLFNBQUEsR0FBQTtXQUFHLG1CQUFBLENBQUEsRUFBSDtFQUFBLENBQTFCLENBMUJBLENBQUE7QUFBQSxFQTJCQSxLQUFLLENBQUMsRUFBTixDQUFTLE1BQU0sQ0FBQyxPQUFoQixFQUF5QixTQUFBLEdBQUE7V0FBRyxPQUFPLENBQUMsWUFBUixDQUFxQixLQUFyQixFQUFIO0VBQUEsQ0FBekIsQ0EzQkEsQ0FBQTtBQUFBLEVBNEJBLFFBQVEsQ0FBQyxFQUFULENBQVksTUFBTSxDQUFDLE9BQW5CLEVBQTRCLFNBQUEsR0FBQTtXQUFHLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEtBQXJCLEVBQUg7RUFBQSxDQUE1QixDQTVCQSxDQUFBO0FBQUEsRUE2QkEsUUFBUSxDQUFDLEVBQVQsQ0FBWSxNQUFNLENBQUMsT0FBbkIsRUFBNEIsU0FBQSxHQUFBO1dBQUcsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsS0FBckIsRUFBSDtFQUFBLENBQTVCLENBN0JBLENBQUE7U0ErQkEsbUJBQUEsQ0FBQSxFQWhDbUI7QUFBQSxDQVZyQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMuY29weVBvc2l0aW9uQW5kU2l6ZSA9IChmcm9tLCB0bykgLT5cbiAgdG8ud2lkdGggPSBmcm9tLndpZHRoXG4gIHRvLmhlaWdodCA9IGZyb20uaGVpZ2h0XG4gIHRvLnggPSBmcm9tLnhcbiAgdG8ueSA9IGZyb20ueVxuXG5leHBvcnRzLmxvZ0xheWVySW5mbyA9IChsYXllcikgLT5cbiAgcHJpbnQgJ0xheWVyOiAnICsgbGF5ZXIubmFtZVxuICBwcmludCAneDogJyArIGxheWVyLnggKyAnLCB5OiAnICsgbGF5ZXIueSArICcsIHdpZHRoOiAnICsgbGF5ZXIud2lkdGggKyAnLCBoZWlnaHQ6ICcgKyBsYXllci5oZWlnaHRcblxuZXhwb3J0cy5kcmFnQW5kTG9nID0gKGxheWVyKSAtPlxuICBsYXllci5kcmFnZ2FibGUgPSB0cnVlO1xuICBsYXllci5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjU0LCAyMDksIDU0LCAwLjUpXCI7XG5cbiAgZHJhZ2dlclNpemUgPSAyMDtcblxuICBzZXREcmFnZ2VyUG9zaXRpb25zID0gLT5cbiAgICBkcmFnZ2VyVy54ID0gbGF5ZXIubWF4WCAtIGRyYWdnZXJTaXplXG4gICAgZHJhZ2dlclcueSA9IGxheWVyLnkgKyAobGF5ZXIuaGVpZ2h0IC8gMikgLSBkcmFnZ2VyU2l6ZVxuICAgIGRyYWdnZXJILnggPSBsYXllci54ICsgKGxheWVyLndpZHRoIC8gMikgLSBkcmFnZ2VyU2l6ZVxuICAgIGRyYWdnZXJILnkgPSBsYXllci5tYXhZIC0gZHJhZ2dlclNpemVcblxuICBkcmFnZ2VyVyA9IG5ldyBMYXllclxuICAgIHdpZHRoOiBkcmFnZ2VyU2l6ZSAqIDIsIGhlaWdodDogZHJhZ2dlclNpemUgKiAyLCBib3JkZXJSYWRpdXM6IGRyYWdnZXJTaXplICogMlxuICBkcmFnZ2VyVy5kcmFnZ2FibGUuaG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgZHJhZ2dlckggPSBkcmFnZ2VyVy5jb3B5KCk7XG4gIGRyYWdnZXJILmRyYWdnYWJsZS52ZXJ0aWNhbCA9IHRydWU7XG5cbiAgZHJhZ2dlclcub24gRXZlbnRzLkRyYWdNb3ZlLCAtPlxuICAgIGxheWVyLndpZHRoID0gZHJhZ2dlclcueCAtIGxheWVyLnggKyBkcmFnZ2VyU2l6ZVxuICAgIHNldERyYWdnZXJQb3NpdGlvbnMoKVxuXG4gIGRyYWdnZXJILm9uIEV2ZW50cy5EcmFnTW92ZSwgLT5cbiAgICBsYXllci5oZWlnaHQgPSBkcmFnZ2VySC55IC0gbGF5ZXIueSArIGRyYWdnZXJTaXplXG4gICAgc2V0RHJhZ2dlclBvc2l0aW9ucygpXG5cbiAgbGF5ZXIub24gRXZlbnRzLkRyYWdNb3ZlLCAtPiBzZXREcmFnZ2VyUG9zaXRpb25zKClcbiAgbGF5ZXIub24gRXZlbnRzLkRyYWdFbmQsIC0+IGV4cG9ydHMubG9nTGF5ZXJJbmZvKGxheWVyKVxuICBkcmFnZ2VyVy5vbiBFdmVudHMuRHJhZ0VuZCwgLT4gZXhwb3J0cy5sb2dMYXllckluZm8obGF5ZXIpXG4gIGRyYWdnZXJILm9uIEV2ZW50cy5EcmFnRW5kLCAtPiBleHBvcnRzLmxvZ0xheWVySW5mbyhsYXllcilcblxuICBzZXREcmFnZ2VyUG9zaXRpb25zKCk7Il19
