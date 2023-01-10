// Each branch has multiples child branches 
class Branch{

    constructor(begin,end,length){
        this.begin = begin;
        this.end = end;

        this.length = length;
        console.log(this.length);

        this.lBranch;
        this.rBranch;
        
    }

    setBranch(){
        
        var dir = p5.Vector.sub(this.end,this.begin);
        dir.rotate(-PI/4); 
        dir.mult(0.6);
        var newLeftEnd = p5.Vector.add(this.end,dir);

        this.lBranch = new Branch(this.end,newLeftEnd,this.end.dist(newLeftEnd));
        if(this.lBranch.length > 5)
            this.lBranch.setBranch();


        var dir = p5.Vector.sub(this.end,this.begin);
        dir.rotate(PI/4);
        dir.mult(0.6);
        var newRightEnd = p5.Vector.add(this.end,dir);

        this.rBranch = new Branch(this.end,newRightEnd,this.end.dist(newRightEnd));
        if(this.rBranch.length > 5)
            this.rBranch.setBranch();
        
    }


    draw(){
        this.setStroke(200,4);
        line(this.begin.x,this.begin.y,this.end.x,this.end.y);

        if(this.length > 5){
            this.lBranch.draw();
            this.rBranch.draw();
        }
    }


    setStroke(sValue,sWeight){

        strokeWeight(sWeight);
        stroke(sValue);
    }



}