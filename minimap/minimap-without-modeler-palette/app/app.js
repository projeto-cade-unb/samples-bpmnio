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

