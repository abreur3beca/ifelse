let promocao = true;
promocao = false;
if (promocao == true){
    console.log("Hora de comprar!");
}
else {
    console.log("Hora de esperar uma promoção");
}

let nivelFome = 7;
if (nivelFome >7){
    console.log("Hora de comer!");
}
else{
    console.log("Podemos comer mais tarde!");
}

let humor = 'sonolento';
let nivelCansaco = 6;
if (humor == 'sonolento' && nivelCansaco >8){
    console.log("Hora de dormir");
}
else{
    console.log("Ainda não é hora de dormir");
}

let estacao = 'inverno';
if (estacao == 'inverno'){
    console.log("É inverno! Tudo está coberto de neve");
}
else if(estacao == 'outono'){
    console.log("É outono! As folhas estão caindo");
}
else if(estcao == 'verão'){
    console.log("É ensolarado e quente poruqe é verão");
}

let posicaoFinalAtleta = 'primeiro lugar';
switch(posicaoFinalAtleta) {
    case 'primeiro lugar':
        console.log("Você ganha a medalha de ouro");
    break;
    case 'segundo lugar':
        console.log("Você ganha a medalha de prata");
    break;
    case 'terceiro lugar':
        console.log("Você ganha a medalha de bronze");
    break;
    default:
        console.log("Nenhuma medalha concedida");
}