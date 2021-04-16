class Paper{
	constructor(x,y,r)
	{
	// assign options to the paper ball
		var options={
	  'density':7.5,
      'isStatic' : false,
      'friction': 0.8,
      'restitution':0
		}
	    this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the paper ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}