class Base{
  constructor(x,y,width,height){
     
      this.body = Bodies.rectangle(x,y,width,height);
      this.body.width = width;
      this.body.height = height;
      this.image=loadImage("sprites/wood2.png");
      World.add(world,this.body);
  }
display(){
 
  push();
  
 
  translate(this.body.position.x,this.body.position.y);
 
  imageMode(CENTER);
  // fill(rgb(122, 57, 27));
  image(this.image,0 ,0,this.body.width,this.body.height);
  pop();
}

}