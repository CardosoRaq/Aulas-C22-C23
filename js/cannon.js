class Cannon {

    constructor(x, y, width, height, angle){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    
    }

    display(){

        //mostrar o cano do canhão
        push();
        translate(this.x, this.y);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();

        //mostrar a base do canhão
        rect(70,20,200,200);
        noFill(); //mostra apenas a borda da figura


    }







}