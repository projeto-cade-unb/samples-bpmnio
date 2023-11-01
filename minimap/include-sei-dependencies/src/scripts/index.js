import "../styles/index.css";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import "diagram-js-minimap/assets/diagram-js-minimap.css";
import BpmnModeler from "bpmn-js/lib/Modeler";
import BpmnJS from "bpmn-js";
import minimapModule from "diagram-js-minimap";

global.BpmnJS = BpmnJS;
global.BpmnModeler = BpmnModeler;
global.minimapModule = minimapModule;

// "https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/main/colors/resources/pizza-collaboration.bpmn"
// "https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/main/starter/diagram.bpmn"

// fetch(
//   "https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/main/colors/resources/pizza-collaboration.bpmn"
// )
//   .then((response) => response.text())
//   .then((xml) => {
//     var viewer = new BpmnJS({
//       container: "#canvas",
//       width: "100%",
//       height: "100%",
//       // additionalModules: [minimapModule],
//     });

//     // viewer.get("minimap").open();
//     viewer.importXML(xml, function (err) {
//       if (err) {
//       } else {
//         var canvas = viewer.get("canvas");
//         canvas.zoom("fit-viewport");
//         canvas.viewbox();
//       }
//     });
//   });
