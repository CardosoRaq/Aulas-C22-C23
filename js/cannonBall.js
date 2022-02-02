//criando a classe para as várias bolas do canhão
class CannonBall{

    //método construtor da classe recebe apenas a posição da bala de canhão
    constructor(x, y){

        //this.x = x;
        //this.y = y;

        //a bola de canhão é redonda, portanto seu tamanho é definido pelo raio
        this.radius = 30;

        //criando o corpo da bola. Aqui ela é estática para que se mantenha parada até que seja lançada
        this.ball = Bodies.circle(x, y, this.radius, {isStatic:true});
        World.add(world, this.ball);
        
        this.ballImg = loadImage("./assets/cannonball.png");

    }

    //método para atirar a bola de canhão
    shoot(){
        //para converter o ângulo de radianos para graus é necessário multiplicar por (pi/180), onde pi é 3.14 por padrão
        var newAngle = cannon.angle - 28;
        newAngle = newAngle*(3.14/180);

        //armazenamos o ângulo do canhão na variável velocity
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.3); //multiplicando para reduzir um pouco a velocidade

        //define que apenas quando a bola for lançada o "isStatic" será falso, para que a bola se mova
        Body.setStatic(this.ball, false);
        //definindo a velocidade em ângulo (radianos) para x e y (x+ = vai para a direita, y- = vai para baixo)
        Body.setVelocity(this.ball, {
            x: velocity.x * (180/3.14), 
            y: velocity.y * (180/3.14) });

    }

    //método para exibir as bolas de canhão
    display(){

        //cria uma variável para substituir os "this.ball.position.x" por "pos.x"
        var pos = this.ball.position;

        push();
        imageMode(CENTER);
        image(this.ballImg, pos.x, pos.y, this.radius, this.radius);
        pop();


    }




}