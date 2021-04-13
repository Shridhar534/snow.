class Snow {
    constructor (x,y) {
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        this.addImage("sprites/snow4.webq")
        World.add(world, this.Snow);
        
        
    }
    updateY(){     
        if(this.Snow.position.y > height){

            Matter.Body.setPosition(this.Snow, {x:random(0,400), y:random(0,400)})
        }
    }
    showDrop(){
        //fill("blue")
        imageMode(CENTER);
        ellipse(this.Snow.position.x,this.Snow.position.y,this.radius,this.radius);
    }

}
