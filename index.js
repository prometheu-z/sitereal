let botao1= document.getElementById('btnlogar1');
let botao = document.getElementById('btnlogar');
let sen = false;
let mat = false;


botao.addEventListener('click', function validadeFields(event) {
    event.preventDefault();
    let pegmatricula = document.getElementById('Matricula').value.replace(" ", "").toLowerCase();
    let pegasenha= document.getElementById('senha').value;

    additem(event)
    function additem(e) {
        e.preventDefault();
    
        if (localStorage.hasOwnProperty("usuarios")){
            usuarios = JSON.parse(localStorage.getItem('usuarios'));
        }
    };
    for(let i in usuarios){
        if (pegmatricula == usuarios[i].matricula){
            mat = true;
            break;
        }
        else {
            mat = false;
        }
        }
    
    for(let i in usuarios){
        if (pegasenha == usuarios[i].senha){
            sen = true;
            break;
        }
        else {
            sen = false;
            }
    }
    if (mat && sen){
        for(let i in usuarios){
            if (pegmatricula == 'tn67548'){
                location.href = 'paginaadm.html'
                break;
            }
            else {
                location.href = 'pagina.html'
                }
        }
    }
    else{
        document.getElementById('erro').style.display = "block";
        
    }
    
}

)
botao1.addEventListener('click', function logar(event){
    event.preventDefault();
    location.href = 'made-senha.html';
})