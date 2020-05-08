import sketch from 'sketch'
import * as DOM from 'sketch/dom'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  console.log('********************');
  console.log('its alive');
  console.log('********************');

  let document = DOM.getSelectedDocument()
  let selection = document.selectedLayers
  if(!selection.isEmpty) {
    let layers = selection.forEach((layer) => {
      var symbolMaster = document.getSymbolMasterWithID(layer.symbolId);
      var instances = symbolMaster.getAllInstances();
      instances.forEach((instance) => {
        instance.detach()
      })
      sketch.UI.message(`All instances of ${symbolMaster.name} are now groups`)
    })
  } else {
    sketch.UI.message("Not layer selected yet!")
  }
}
