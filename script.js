const gifs = [

    'gif1.html',

    'gif2.html',

    'gif3.html'

];



function getRandomGif() {

    const randomIndex = Math.floor(Math.random() * gifs.length);

    window.location.href = gifs[randomIndex];

}