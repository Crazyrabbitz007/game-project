class Player {
  constructor() {
    this.r = 60;
    this.x = w * 0.5
    this.y = h - this.r;
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
  }
}
