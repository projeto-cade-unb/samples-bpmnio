import $ from 'jquery';
//import BpmnModeler from 'bpmn-js/lib/Modeler';
//import minimapModule from 'diagram-js-minimap';
//import BpmnJS from 'bpmn-js';
//import 'bpmn-js/lib/Modeler';
//import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.development.js';
import * as BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.development.js';


//import diagramXML from '../resources/pizza-collaboration.bpmn';

var diagramUrl = 'diagram.bpmn';

var bpmnViewer = new BpmnJS({
        container: '#js-canvas'
});

 /**
       * Open diagram in our viewer instance.
       *
       * @param {String} bpmnXML diagram to display
       */
      async function openDiagram(bpmnXML) {

        // import diagram
        try {

          await bpmnViewer.importXML(bpmnXML);

          // access viewer components
          var canvas = bpmnViewer.get('canvas');
          var overlays = bpmnViewer.get('overlays');


          // zoom to fit full viewport
          canvas.zoom('fit-viewport');

          // attach an overlay to a node
          overlays.add('SCAN_OK', 'note', {
            position: {
              bottom: 0,
              right: 0
            },
            html: '<div class="diagram-note">Mixed up the labels?</div>'
          });

          // add marker
          canvas.addMarker('SCAN_OK', 'needs-discussion');
        } catch (err) {

          console.error('could not import BPMN 2.0 diagram', err);
        }
      }


      // load external diagram file via AJAX and open it
      $.get(diagramUrl, openDiagram, 'text');
