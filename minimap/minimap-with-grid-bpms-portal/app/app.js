import $ from "jquery";
import Viewer from "bpmn-js/lib/Viewer";
import pizzaDiagramXML from "../resources/pizza-collaboration.bpmn";
import atoDiagramXML from "../resources/AtoConcetracaoSumario.bpmn";

/**
 *
 * @param {string} xml
 * @param {Viewer} viewer
 * @param {JQuery?} container
 */
async function openDiagram(xml, viewer, container) {
  try {
    await viewer.importXML(xml);

    if (container) container.removeClass("with-error").addClass("with-diagram");

    const canvas = viewer.get("canvas");

    canvas.zoom("fit-viewport");
  } catch (error) {
    console.error(error);
    if (container) container.removeClass("with-diagram").addClass("with-error");
  }
}

const container = $("#js-drop-zone");
const canvasGrid = $(".canvas-grid");
const bpmList = [atoDiagramXML, pizzaDiagramXML];

for (let index = 1; index <= 100; index++) {
  const canvasId = `canvas-${index}`;

  canvasGrid.prepend(`
    <div>
      <h2>Process ${index}</h2>
      <div class="canvas" id="${canvasId}"></div>
    </div>
  `);

  openDiagram(
    bpmList[~~(bpmList.length * Math.random())],
    new Viewer({
      container: `#${canvasId}`,
    }),
    container
  );
}
