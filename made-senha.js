

let botao= document.getElementById('btnlogar');
localStorage.setItem("usuarios", JSON.stringify(usuarios));


botao.addEventListener('click', function logar(event){
    event.preventDefault();


    let pegmatricula2 = document.getElementById('Matricula').value.toLowerCase();
    let pegsencon = document.getElementById('madesenha').value;
    let pegasen = document.getElementById('senha').value;
    let pegacpf = document.getElementById('cpf').value;

    let vallidalogin = false;
    let conf = false;
    let matri = false;
    let hassen = false;
    let dig = 0;
    function additem(e) {
        e.preventDefault();
        if (localStorage.hasOwnProperty("usuarios")){
            usuarios = JSON.parse(localStorage.getItem('usuarios'));
        }
        usuarios[i].senha = pegasen;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    };

    for (i in usuarios){
        if (pegmatricula2 == usuarios[i].matricula){
            document.getElementById('erro2').style.display = 'none';
            matri = true;
            dig = i;
            break;
        }
        else{
            matri = false;

        }
    }

    if ((pegasen == pegsencon && pegasen != '')) {
        document.getElementById('erro').style.display = 'none';
        conf = true;
    }
    else {
        conf = false;
        pegasen = '';
    }
    for (i in usuarios){
        if (usuarios[i].senha != ''){
            document.getElementById('erro3').style.display = 'none';
            hassen = true;
            break;
        }
        else{
            hassen = false;

        }
    }

    let cep = false;

    for (i in usuarios) {
        if (pegacpf == usuarios[i].cpf){
            cep = true;
            break;
        }
        else{
            cep = false;
        }
    }
    if (!cep){
        document.getElementById('erro3').style.display = 'block';
    }
    
    if (conf && matri && cep){
        for(i in usuarios){
            if (usuarios[i].matricula == pegmatricula2){
                additem(event);
                location.href = 'pagina.html'
                break;
            }
        }
        


    }
    if (!conf){
        document.getElementById('erro').style.display = 'block';
        pegasen = '';
    }
    if (!matri){
        document.getElementById('erro2').style.display = 'block';
        pegasen = '';
    }
    


})


    
    