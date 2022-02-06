const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var canvas, backgroundImg;
var ground, tower, towerImg;
var angle, cannon, cannonBall;
//criando uma matriz para armazenar todas as balas de canhão
var balls = [];

function preload(){
    backgroundImg = loadImage("./assets/background.gif");
    towerImg = loadImage("./assets/tower.png");
}

function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //criando solo 
    ground = Bodies.rectangle(0, height-1, width*2, 1, {isStatic:true});
    World.add(world, ground);

    //criando a torre
    tower = Bodies.rectangle(160, 350, 160, 310, {isStatic:true});
    World.add(world, tower);

    //definindo a unidade de medida do ângulo para GRAUS ao invés de RADIANOS
    angleMode(DEGREES);
    //definindo o ângulo inicial do canhão
    angle = 20;

    //criando um novo objeto da classe Canhão e passando os parâmetros necessários
    cannon = new Cannon(180,110,150,100,angle);


   
}

function draw(){
    //background(189);
    image(backgroundImg, 0, 0, width, height); //colocando imagem de fundo

    Engine.update(engine);
    
    //mostrando solo na tela
    rect(ground.position.x, ground.position.y, width*2,1);

    //mostrando o contorno da torre na tela
    //rect(tower.position.x, tower.position.y, 180,350);

    //push adiciona uma configuração (+)
    push();
    imageMode(CENTER);
    image(towerImg, tower.position.x, tower.position.y, 160,310);
    pop(); //pop retorna para a configuração anterior (del)

    //chamando o método display(mostrar) da classe Canhão para o objeto criado
    cannon.display();

    //chamando o método display(mostrar) da classe Bola de Canhão para o objeto criado
    //cannonBall.display();


    for (var i = 0; i<balls.length; i++){
        showCannonBalls(balls[i], i);
    }


}

//função para a atirar a bola quando a seta para baixo for pressionada
function keyPressed(){
    if (keyCode===DOWN_ARROW){
        //criando um novo objeto da classe Bola de Canhão, passando a mesma posição do cano do canhão
        cannonBall = new CannonBall (cannon.x, cannon.y);
        balls.push(cannonBall);
    }
}

//testa se existe uma bolinha, e depois mostra a bala de canhão na tela
function showCannonBalls(ball, i){
    if (ball){
        ball.display();
    }
}

//testa se o botão foi solto, se sim ela dispara a bolinha e decrementa 1 do vetor
function keyReleased(){
    if (keyCode===DOWN_ARROW){
        balls[balls.length - 1].shoot();
    }
}
