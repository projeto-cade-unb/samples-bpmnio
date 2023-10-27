import '../styles/index.scss';
import BpmnJS from "bpmn-js";
import "bpmn-js/dist/assets/bpmn-js.css";

// "https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/main/colors/resources/pizza-collaboration.bpmn"
// "https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/main/starter/diagram.bpmn"

fetch(
  "https://raw.githubusercontent.com/bpmn-io/bpmn-js-examples/main/colors/resources/pizza-collaboration.bpmn"
)
  .then((response) => response.text())
  .then(async (bpmnXML) => {
    const viewer = new BpmnJS({
      container: "body",
      width: '200vw',
      height: '200vh'
    });

    await viewer.importXML(bpmnXML);
  });
