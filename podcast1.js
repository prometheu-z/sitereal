let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_desc = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')
let sportsNews = document.querySelector('#sportsNews .newsBox')
let businessNews = document.querySelector('#businessNews .newsBox')
let techNews = document.querySelector('#techNews .newsBox')

let header = document.querySelector('.header')
let toggleMenu = document.querySelector('.bar')
let menu = document.querySelector('nav ul')

const toggle = (e)=>{
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('activeMenu')
}

toggleMenu.addEventListener('click',toggle)



window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky')
    }
})







// fetching news data from a website providing api

const apiKey = "29f8e42efe874ee2be23f0d1edb6844b"

const fetchData = async (category,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
    
}
// fetchData('general',5)


let musicas = [
    {
        titulo: 'Episódio 1',
        descricao:'',
        audio: 'audio/teste.mp3',
        img: 'img/images/hero-title.jpg',
        indice: 1
    },
    

]
let musica = document.querySelector('audio')
let indexm = 0;
let duramusic = document.getElementById('fim');
let botao3 = document.getElementById("btnlogar")

let image = document.getElementById('img');
let vid = document.getElementById('btnlogar');
let nomemu = document.getElementById('h2');
let nomedes = document.getElementById('i')
let p = false;
rendem(indexm)

botao3.addEventListener('click', function algo(){
    location.href = 'videos.html'
})






function rendem(index){
    musica.setAttribute('src', musicas[index].audio);
    musica.addEventListener('loadeddata', () => {
        nomemu.textContent = musicas[index].titulo;

    })
}

