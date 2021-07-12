class particles {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,225), random(0,225), random(0,225));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color)
        circle(pos.x,pos.y,10);

        
    }
}
