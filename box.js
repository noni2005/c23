class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':2,
        'friction':.4,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
   var angle=this.body.angle; 
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate (PI/7);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
