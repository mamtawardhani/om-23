class Box{

    constructor(x,y, width,height){

        this.a=Bodies.rectangle(x,y, 40,30)
        this.w=width
        this.h=height
        World.add(wo, this.a)
    }

    show(){
        var pos=this.a.position
        rectMode(CENTER)
        rect(pos.x, pos.y,this.w, this.h)
    }

}


