class Tree {
    constructor (x,y,width,height) {
        var options={
            isStatic:true
        }
           
        this.image=loadImage("sprites/tree.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 50;
        this.height = 600;
        
        World.add(world, this.body);
      }
      display(){
          
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,1125,300,500,600);
        //rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    
    

}