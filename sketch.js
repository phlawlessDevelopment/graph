/**
 * The graph is a dictionary of GraphNode objects.
 * The keys are the names of the buttons.
 * This becomes useful when we want to find a button by name when drawing.
 */
graph = {};
/**
 * The patterns are the output of the algorithm.
 * Each pattern is an string of button names.
 * The patterns array is an array of patterns.
 */
patterns = [];
/**
 * The lines are part of the drawing step, mostly for clarity.
 * Each line is a Line object.
 * The lines array is an array of lines.
 */
lines = [];
/**
 * Some integers to keep track of the animation state.
 */
patternToDisplay = 0;
lineToDisplay = -2;
highlightedButtonIndex = -1;

function setup() {
  createCanvas(1024, 768);

  initGraph();
  addConnections();
  // patterns = findZigZags();
  patterns = findCircles();
  lines = makeLines();
}

function draw() {
  background(0);
  tick();
  for (let i = 0; i < lines.length; i++) {
    if (i <= lineToDisplay) {
      lines[patternToDisplay][i].show();
    }
  }
  for (const key in graph) {
    const button = graph[key];
    button.showHighlight();
    button.show();
  }
}
/**
 * The tick function is called 30 frarmes.
 * It is used to animate the graph.
 * It increments the highlighted button, line and pattern.
 * If the patterns are done, it stops the loop.
 */
function tick() {
  if (frameCount > 0 && frameCount % 30 == 0) {
    // increment the highlighted button and line
    highlightedButtonIndex++;
    lineToDisplay++;
    // higlight the current button
    if (highlightedButtonIndex < patterns[patternToDisplay].length) {
      graph[
        patterns[patternToDisplay][highlightedButtonIndex]
      ].setHighlighted();
    } else {
      // reset the highlighted button and line
      highlightedButtonIndex = -1;
      lineToDisplay = -2;
      // increment the pattern
      patternToDisplay++;
      if (patternToDisplay >= patterns.length) {
        // we're done
        noLoop();
      }
    }
  }
}
