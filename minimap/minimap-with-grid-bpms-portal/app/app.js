import $ from 'jquery';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import minimapModule from 'diagram-js-minimap';
import diagramXML from '../resources/pizza-collaboration.bpmn';
import diagramXML2 from '../resources/AtoConcetracaoSumario.bpmn';

var container = $('#js-drop-zone');
var canvas1 = $('#js-canvas1');
var canvas2 = $('#js-canvas2');
var canvas3 = $('#js-canvas3');
var canvas4 = $('#js-canvas4');

var bpmnModeler1 = new BpmnModeler({
  container: canvas1,
  additionalModules: [
    minimapModule
  ]
});

var bpmnModeler2 = new BpmnModeler({
  container: canvas2,
  additionalModules: [
    minimapModule
  ]
});

/*

var bpmnModeler3 = new BpmnModeler({
  container: canvas3,
  additionalModules: [
    minimapModule
  ]
});

var bpmnModeler4 = new BpmnModeler({
  container: canvas4,
  additionalModules: [
    minimapModule
  ]
});

*/
async function openDiagram(xml,xml2) {

  await bpmnModeler1.importXML(xml);
  container
      .removeClass('with-error')
      .addClass('with-diagram');

  bpmnModeler1.get('minimap').open();


  await bpmnModeler2.importXML(xml2);
  container
      .removeClass('with-error')
      .addClass('with-diagram');

  bpmnModeler2.get('minimap').open();
/*

  await bpmnModeler3.importXML(xml);
  container
      .removeClass('with-error')
      .addClass('with-diagram');

  bpmnModeler3.get('minimap').open();  
  
  await bpmnModeler4.importXML(xml);
  container
      .removeClass('with-error')
      .addClass('with-diagram');

  bpmnModeler4.get('minimap').open();  
*/  
}

$(function() {
  openDiagram(diagramXML,diagramXML2)
});

