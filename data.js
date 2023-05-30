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
    this.remainingHighlightTime = false;
  }
  show() {
    fill(this.color);
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    text(this.name, this.x, this.y);
  }
  setHighlighted() {
    this.highlighted = true;
    this.remainingHighlightTime = 60;
  }
  showHighlight() {
    if (!this.highlighted) return;
    fill(255);
    ellipse(this.x, this.y, 55, 55);
    fill(0);
    this.remainingHighlightTime--;
    if (this.remainingHighlightTime <= 0) this.highlighted = false;
  }
}
