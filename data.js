/**
 * GraphNode class these are the buttons in the graph.
 * They have a name, color, x and y position, and left, right, and forward children.
 * They also have a highlighted property which is used for drawing the output.
 * The remainingHighlightTime is used to show the higlight only for a secific time.
 */
class GraphNode {
  constructor(name, color, x, y, f, l, r) {
    this.name = name;
    this.color = color;
    this.x = x;
    this.y = y;
    this.f = f;
    this.l = l;
    this.r = r;
    this.highlighted = false;
    this.remainingHighlightTime = 0;
  }
  show() {
    fill(this.color);
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    text(this.name, this.x, this.y);
  }
  setHighlighted() {
    this.highlighted = true;
    this.remainingHighlightTime = 30;
  }
  showHighlight() {
    if (!this.highlighted) return;
    fill(255);
    ellipse(this.x, this.y, 60, 60);
    fill(0);
    this.remainingHighlightTime--;
    if (this.remainingHighlightTime <= 0) this.highlighted = false;
  }
}

/**
 * Line class, these are used for drawing the output
 */
class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  show() {
    stroke(255);
    strokeWeight(5);
    line(this.x1, this.y1, this.x2, this.y2);
    stroke(0);
    strokeWeight(0);
  }
}
