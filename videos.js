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
        titulo: 'Começo do diario marginal',
        descricao:'blablablablabal',
        audio: 'audio/teste.mp3',
        img: 'img/Design sem nome.png'
    },
    {
        titulo: 'texto 2',
        descricao:'blablablablabal',
        audio: 'audio/teste1.mp3',
        img: 'img/Design sem nome(1).png'
    },
    {
        titulo: 'texto 3',
        descricao:'blablablablabal',
        audio: 'audio/teste2.mp3',
        img: 'img/Design sem nome.png'
    }


]
let musica = document.querySelector('audio')
let indexm = 0;
let duramusic = document.getElementById('fim');

let image = document.getElementById('img');
let vid = document.getElementById('btnlogar');
let nomemu = document.getElementById('h2');
let nomedes = document.getElementById('i')
let p = false;





vid.addEventListener('click', para);


function para(){
    location.href = 'podcast1.html'
}



function sugpm(segundo){
    let campmin = Math.floor(segundo/60);
    let campseg = segundo%60;
    if (campseg < 10){
        campseg = "0" + campseg
    }

    return campmin+':'+campseg;
}
