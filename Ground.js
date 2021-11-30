class Ground
{
    constructor(x,y,sx,sy)
    {
      this.x = x;
      this.y = y;
      this.sx = sx;
      this.sy = sy;

      var option = {
        isStatic:true
      };

      this.body = Bodies.rectangle(x, y, sx, sy, option);
      World.add(world, this.body);
    }

    display()
    {
      push();

      rectMode(CENTER);
      stroke(255, 0 ,34)
      fill(255, 0, 100);
      rect(this.body.position.x, this.body.position.y, this.sx, this.sy);
      
      pop();
    }
}