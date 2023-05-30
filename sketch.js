graph = {};
patterns = [];
patternToDisplay = 0;
highlightedButtonIndex = -1;

function setup() {
  createCanvas(1024, 768);
  background(0);
  initGraph();
  addConnections();
  // patterns = findZigZags();
  // patterns = findCircles();
}

function draw() {
  background(0);
  showPatterns();
  for (const key in graph) {
    const button = graph[key];
    button.showHighlight();
    button.show();
  }
}

function initGraph() {
  graph["A"] = new GraphNode(
    "A",
    color(60, 219, 78),
    width / 2,
    height / 2 + 100,
    null,
    null,
    null
  );
  graph["B"] = new GraphNode(
    "B",
    color(208, 66, 66),
    width / 2 + 100,
    height / 2,
    null,
    null,
    null
  );

  graph["X"] = new GraphNode(
    "X",
    color(64, 204, 208),
    width / 2 - 100,
    height / 2,
    null,
    null,
    null
  );

  graph["Y"] = new GraphNode(
    "Y",
    color(236, 219, 51),
    width / 2,
    height / 2 - 100,
    null,
    null,
    null
  );
}

function addConnections() {
  graph["A"].f = graph["Y"];
  graph["A"].l = graph["X"];
  graph["A"].r = graph["B"];

  graph["B"].f = graph["X"];
  graph["B"].l = graph["A"];
  graph["B"].r = graph["Y"];

  graph["X"].f = graph["B"];
  graph["X"].l = graph["Y"];
  graph["X"].r = graph["A"];

  graph["Y"].f = graph["A"];
  graph["Y"].l = graph["B"];
  graph["Y"].r = graph["X"];
}

function showPatterns() {
  if (frameCount > 0 && frameCount % 60 == 0) {
    highlightedButtonIndex++;
    if (highlightedButtonIndex < patterns[patternToDisplay].length) {
      graph[
        patterns[patternToDisplay][highlightedButtonIndex]
      ].setHighlighted();
    } else {
      highlightedButtonIndex = -1;
      patternToDisplay++;
      if (patternToDisplay >= patterns.length) {
        console.log("done");
        noLoop();
      }
    }
  }
}

function findCircles() {
  const circles = [];
  // go left
  for (const key in graph) {
    const button = graph[key];
    let circle = button.name;
    let next = button.l;
    while (next != button) {
      circle += next.name;
      next = next.l;
    }
    circles.push(circle);
  }
  // go right
  for (const key in graph) {
    const button = graph[key];
    let circle = button.name;
    let next = button.r;
    while (next != button) {
      circle += next.name;
      next = next.r;
    }
    circles.push(circle);
  }
  console.log(circles);
  return circles;
}

function findZigZags() {
  const zigzags = [];
  // go left
  for (const key in graph) {
    const button = graph[key];
    let zigzag = button.name;
    let next = button.l;
    zigzag += next.name;
    next = next.f;
    zigzag += next.name;
    next = next.r;
    zigzag += next.name;
    zigzags.push(zigzag);
    console.log(zigzag);
  }
  // go right
  for (const key in graph) {
    const button = graph[key];
    let zigzag = button.name;
    let next = button.r;
    zigzag += next.name;
    next = next.f;
    zigzag += next.name;
    next = next.l;
    zigzag += next.name;
    zigzags.push(zigzag);
  }
  console.log(zigzags);
  return zigzags;
}
