const answers_no = {
    english: [
        "No",
        "Babe wtf",
        "Are you really sure??",
        "Are you really realy sure???",
        "uuh think this thru",
        "do u not believe in second chances??",
        "sum aint right ab this lol",
        "maybe lets talk this out? :D",
        " >.< ok wtf",
        "kk now this is hurting my feelings ;(",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over."
    ]
};

answers_yes = {
    "english": "Yes"
};

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/giphy (1).gif";
    refreshBanner();
    
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
    
    // Add specific images at four different paths
    const images = [
        "public/images/59694E9B-E666-4DBF-B5F3-48D42F7D3FC5.thumbnail.jpg",
        "public/images/303327EB-5514-4971-B780-929583F91812.thumbnail-1.jpg",
        "public/images/IMG_0494.thumbnail.jpg",
        "public/images/IMG_4637.thumbnail.jpg"
    ];
    
    const positions = [
        { top: '0px', left: '0px' },
        { top: '0px', right: '0px' },
        { bottom: '0px', left: '0px' },
        { bottom: '0px', right: '0px' }
    ];
    
    images.forEach((src, index) => {
        let img = document.createElement('img');
        img.src = src;
        img.style.position = 'fixed';
        img.style.width = '200px'; // Increase size for better resolution
        img.style.height = '200px';
        img.style.objectFit = 'cover'; // Ensures the image covers the dimensions
        img.style.imageRendering = 'high-quality'; // Improves rendering on some browsers
        Object.assign(img.style, positions[index]);
        document.body.appendChild(img);
    });
    

    // Add full-screen background image
    let fullScreenImg = document.createElement('img');
    fullScreenImg.src = "public/images/picmix.com_278531.gif";
    fullScreenImg.style.position = 'fixed';
    fullScreenImg.style.top = '0';
    fullScreenImg.style.left = '0';
    fullScreenImg.style.width = '100vw';
    fullScreenImg.style.height = '100vh';
    fullScreenImg.style.zIndex = '-1';
    document.body.appendChild(fullScreenImg);
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
