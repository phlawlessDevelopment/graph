/**
 * Finds and returns all the circles in the graph.
 */
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

/**
 * Finds and returns all the zig-zags in the graph.
 */
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
