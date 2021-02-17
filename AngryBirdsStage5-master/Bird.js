class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200 ){ 
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }
    for(var s = 0; s <this.trajectory.length; s++){
    image(this.smokeimage,this.trajectory[s][0],this.trajectory[s][1]);
    }
  }
}
