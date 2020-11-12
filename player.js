class Player {
  constructor() {
    this.r = 60;
    this.x = w * 0.5;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
  }
  move() {

    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
      this.y-= this.speed;
        //decrease y point
        break;
      case 'down':
      this.y+= this.speed;
        //increase y point
        break;
      case 'right':
        //increase x point
      this.x += this.speed;
        break;
      case 'left':
        //decrease x point
        this.x -= this.speed;
        break;
        default:
        break;
    }
  }
}
