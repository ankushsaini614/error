class Dustbin{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.wallThickness = 20;
        this.width = 200;
        this.height = 100;
        this.x = x;
        this.y = y;
        
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.wallThickness,options)
        this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallThickness,this.height,options);
        Matter.Body.setAngle(this.leftBody,0);

        this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallThickness,this.height,options);
        Matter.Body.setAngle(this.rightBody,0);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);


    }
    display(){
        var posBottom = this.bottomBody.position
        var posLeft = this.leftBody.position
        var posRight = this.rightBody.position

        push();
        translate(posBottom.x,posBottom.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.wallThickness);
        pop();

        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        rect(0,0,this.wallThickness,this.height);
        pop();

        push();
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        rect(0,0,this.wallThickness,this.height);
        pop();

    }
}