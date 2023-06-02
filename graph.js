/**
 * Create a GraphNode object for each button in the graph.
 * all children are null for now.
 */
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

/**
 * Add connections to the graph.
 * This is done by setting the left, right, and forward children of each node.
 */
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

/**
 *Create a Line object for each pattern in patterns array.
 */
function makeLines() {
  lines = [];
  for (let i = 0; i < patterns.length; i++) {
    lines.push([]);
    for (let j = 0; j < patterns[i].length - 1; j++) {
      const node1 = graph[patterns[i][j]];
      const node2 = graph[patterns[i][j + 1]];
      lines[i].push(new Line(node1.x, node1.y, node2.x, node2.y));
    }
  }
  return lines;
}
