class Warrior{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
    
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width ;
        this.height = height;
    
     //this.w1.scale = 2;
    this.width=width;
    this.height=height;
        World.add(world,this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);

        //imageMode(CENTER);
        fill("blue");
    rect(0,0,this.width,this.height);
    // image(this.gif,0,0,this.width,this.height);
     pop();
    }
    }