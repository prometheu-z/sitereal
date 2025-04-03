

let botao= document.getElementById('btnlogar');
let botao1= document.getElementById('btnlogar1');

botao.addEventListener('click', function logar(event){
    event.preventDefault();

    let pegmatricula = document.getElementById('cpf').value.toLowerCase();

    let mat = false;

    for (i in usuarios) {
        if (pegmatricula == usuarios[i].cpf){
            mat = true;
            break;
        }
        else{
            mat = false;
        }
    }
    if (mat){
        location.href = 'made-senha.html';
    }
    else{
        document.getElementById('erro').style.display = 'block';
    }

})


    
    