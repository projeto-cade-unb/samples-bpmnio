import "../styles/index.css";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
import BpmnJS from "bpmn-js";
import diagramXML from "../../public/pizza-collaboration.bpmn"

var viewer = new BpmnJS({
   container: "#canvas",
   width: "100%",
   height: "100%",
});

viewer.importXML(diagramXML);
