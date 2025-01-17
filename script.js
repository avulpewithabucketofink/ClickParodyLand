function redirectToGif() {

    const gifs = [

        'neru_sassy.gif',

        'momo_support.gif',

        'teto_bread.gif'

    ];

    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    alert('Redirecting to a fun GIF!');

    window.location.href = randomGif;

}
