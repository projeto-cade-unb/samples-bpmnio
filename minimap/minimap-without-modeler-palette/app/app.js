import $ from 'jquery';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import minimapModule from 'diagram-js-minimap';
import diagramXML from '../resources/pizza-collaboration.bpmn';

var container = $('#js-drop-zone');
var canvas = $('#js-canvas');

var bpmnModeler = new BpmnModeler({
  container: canvas,
  additionalModules: [
    minimapModule
  ]
});

/* desabilita emelentos de manipulação click 
var priority = 10000;
var element = bpmnModeler;
this.eventBus = this.bpmnJS.get("eventBus");

eventBus.on('element.dblclick', priority, function(event) {
  return false; // will cancel event
});

*/

async function openDiagram(xml) {

  await bpmnModeler.importXML(xml);
  container
      .removeClass('with-error')
      .addClass('with-diagram');

  bpmnModeler.get('minimap').open();
}

$(function() {
  openDiagram(diagramXML)
});

