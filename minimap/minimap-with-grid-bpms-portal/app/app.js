import $ from "jquery";
import BpmnModeler from "bpmn-js/lib/Viewer";
import diagramXML from "../resources/pizza-collaboration.bpmn";
import diagramXML2 from "../resources/AtoConcetracaoSumario.bpmn";

const container = $("#js-drop-zone");

/**
 *
 * @param {string} xml
 * @param {BpmnModeler} viewer
 */
async function openDiagram(xml, viewer) {
  await viewer.importXML(xml);

  container.removeClass("with-error").addClass("with-diagram");

  viewer.get("minimap").open();
  viewer.get("canvas").zoom("fit-viewport");

  const { inner } = viewer.get("canvas").viewbox();

  canvas.zoom("fit-viewport", {
    x: inner.x + inner.width / 2,
    y: inner.y + inner.height / 2,
  });
}

openDiagram(
  diagramXML,
  new BpmnModeler({
    container: "#js-canvas1",
  })
);

openDiagram(
  diagramXML2,
  new BpmnModeler({
    container: "#js-canvas2",
  })
);

openDiagram(
  diagramXML2,
  new BpmnModeler({
    container: "#js-canvas3",
  })
);
