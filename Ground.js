class Ground {
    constructor() 
    {
        var options=
        {
            isStatic:true

        }
        this.body=Bodies.rectangle(450,390,900,20,options) 
        world.add(world,this.body)
        
    }
    display() 
    {
        
         var pos= this.body.position;
          //push();
          // translate(pos.x, pos.y);
            //rotate(angle); 
            rectMode(CENTER);
             rect(pos.x,pos.y,this.width, this.height);
              //pop();
    }

}