//classe Canhão

class Cannon{


    //método construtor da classe
    //recebe os parâmetros (posX, posY, largura, altura e ângulo)
    constructor(x, y, width, height, angle){
        //this referencia o parâmetro da própria classe, dizendo que ele recebe os dados vindos da criação do objeto
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.cannonBaseImg = loadImage("./assets/cannonBase.png");
        this.cannonImg = loadImage("./assets/canon.png");

    }
    
    //método para exibir o canhão na tela
    display(){

        //condição para mover o cano do canhão com as setas
        //o ângulo aumenta no sentido horário ("+" vai para a direita, "-" para esquerda)
        if (keyIsDown(RIGHT_ARROW) && this.angle< 70){ //&& (and) restringindo o angulo de movimento do canhão
            this.angle +=1; //ou this.angle = this.angle +1
        }
        if (keyIsDown(LEFT_ARROW) && this.angle>= -30){
            this.angle -=1; 
        }

        //código para criar o cano do canhão
        push(); //adiciona uma configuração
        translate(this.x, this.y); //traduz a origem da imagem para as posições indicadas
        rotate(this.angle);
        imageMode(CENTER);
        //depois de colocar o translate, definir x e y do canhão como 0, para criá-lo no ponto de origem que veio na posição do construtor
        image(this.cannonImg, 0, 0, this.width, this.height);
        pop(); //remove a configuração que push adicionou, voltando à anterior

        //código para criar a base do canhão
        image(this.cannonBaseImg,70,20,200,200);
        noFill();

    }




}