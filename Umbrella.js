class Umbrella {
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage("Boy.png");
        World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    imageMode(RADIUS);
    image(this.image,pos.x - 67,pos.y -50,150,200);
}
    
};