
class Paper{
constructor(x,y,r){
var options={
isSttic:true,
restitution:0.3,
friction:0,
density:1.2,
 

}

this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this.y,this.r/2,options);

World.add(world,this.body);

}
display(){
var pos = this.body.position;
push()
translate(pos.x,pos.y)
strokeWeight(0);
//stroke("green");
fill(230);
ellipse(0,0,this.r,this.r)
imageMode(CENTER);
image(this.image, 0,this.r-40,this.r+20,this.r)

pop()

}





















}

